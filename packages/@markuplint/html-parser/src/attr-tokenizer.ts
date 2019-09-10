import { MLASTAttr, MLToken } from '@markuplint/ml-ast';
import UUID from 'uuid';
import getEndCol from './get-end-col';
import getEndLine from './get-end-line';

// eslint-disable-next-line no-control-regex
const reAttrsInStartTag = /(\s*)([^\x00-\x1f\x7f-\x9f "'>/=]+)(?:(\s*)(=)(\s*)(?:(?:"([^"]*)")|(?:'([^']*)')|([^\s]*)))?/;

export default function attrTokenizer(raw: string, line: number, col: number, startOffset: number): MLASTAttr {
	const attrMatchedMap = raw.match(reAttrsInStartTag);
	if (!attrMatchedMap) {
		throw new SyntaxError('Illegal attribute token');
	}

	const spacesBeforeAttrString = attrMatchedMap[1];
	const nameChars = attrMatchedMap[2];
	const spacesBeforeEqualChars = attrMatchedMap[3] || '';
	const equalChars = attrMatchedMap[4] || null;
	const spacesAfterEqualChars = attrMatchedMap[5] || '';
	const quoteChars = attrMatchedMap[6] != null ? '"' : attrMatchedMap[7] != null ? "'" : null;
	const valueChars = attrMatchedMap[6] || attrMatchedMap[7] || attrMatchedMap[8] || (quoteChars ? '' : null);
	const invalid =
		!!(valueChars && quoteChars === null && /["'=<>`]/.test(valueChars)) ||
		!!(equalChars && quoteChars === null && valueChars === null);

	let offset = startOffset;

	const attrToken = tokenizer(raw, line, col, offset);

	const spacesBeforeName = tokenizer(spacesBeforeAttrString, line, col, offset);
	line = spacesBeforeName.endLine;
	col = spacesBeforeName.endCol;
	offset = spacesBeforeName.endOffset;

	const name = tokenizer(nameChars, line, col, offset);
	line = name.endLine;
	col = name.endCol;
	offset = name.endOffset;

	const spacesBeforeEqual = tokenizer(spacesBeforeEqualChars, line, col, offset);
	line = spacesBeforeEqual.endLine;
	col = spacesBeforeEqual.endCol;
	offset = spacesBeforeEqual.endOffset;

	const equal = tokenizer(equalChars, line, col, offset);
	line = equal.endLine;
	col = equal.endCol;
	offset = equal.endOffset;

	const spacesAfterEqual = tokenizer(spacesAfterEqualChars, line, col, offset);
	line = spacesAfterEqual.endLine;
	col = spacesAfterEqual.endCol;
	offset = spacesAfterEqual.endOffset;

	const startQuote = tokenizer(quoteChars, line, col, offset);
	line = startQuote.endLine;
	col = startQuote.endCol;
	offset = startQuote.endOffset;

	const value = tokenizer(valueChars, line, col, offset);
	line = value.endLine;
	col = value.endCol;
	offset = value.endOffset;

	const endQuote = tokenizer(quoteChars, line, col, offset);
	line = endQuote.endLine;
	col = endQuote.endCol;
	offset = endQuote.endOffset;

	return {
		uuid: UUID.v4(),
		raw: attrToken.raw,
		startOffset: attrToken.startOffset,
		endOffset: attrToken.endOffset,
		startLine: attrToken.startLine,
		endLine: attrToken.endLine,
		startCol: attrToken.startCol,
		endCol: attrToken.endCol,
		spacesBeforeName,
		name,
		spacesBeforeEqual,
		equal,
		spacesAfterEqual,
		startQuote,
		value,
		endQuote,
		isInvalid: invalid,
	};
}

function tokenizer(raw: string | null, line: number, col: number, startOffset: number): MLToken {
	raw = raw || '';
	return {
		uuid: UUID.v4(),
		raw,
		startLine: line,
		endLine: getEndLine(raw, line),
		startCol: col,
		endCol: getEndCol(raw, col),
		startOffset,
		endOffset: startOffset + raw.length,
	};
}
