import { Result, createRule } from '@markuplint/ml-core';

export type Type = 'double' | 'single';
export type Quote = '"' | "'";
export type QuoteMap = { [P in Type]: Quote };

const quoteList: QuoteMap = {
	double: '"',
	single: "'",
};

export default createRule<Type>({
	name: 'attr-value-quotes',
	defaultLevel: 'warning',
	defaultValue: 'double',
	defaultOptions: null,
	async verify(document, messages) {
		const reports: Result[] = [];
		await document.walkOn('Element', async node => {
			const message = messages(
				'{0} is must {1} on {2}',
				'Attribute value',
				'quote',
				`${node.rule.value} quotation mark`,
			);
			for (const attr of node.attributes) {
				if (attr.equal.raw === '') {
					continue;
				}
				const quote = attr.startQuote.raw;
				if (quote !== quoteList[node.rule.value]) {
					reports.push({
						severity: node.rule.severity,
						message,
						line: attr.name.startLine,
						col: attr.name.startCol,
						raw: attr.raw.trim(),
					});
				}
			}
		});
		return reports;
	},
	async fix(document) {
		await document.walkOn('Element', async node => {
			for (const attr of node.attributes) {
				const quote = quoteList[node.rule.value];
				if (quote && attr.startQuote && attr.startQuote.raw !== quote) {
					attr.startQuote.fix(quote);
					attr.endQuote.fix(quote);
				}
			}
		});
	},
});
