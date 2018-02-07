import { Indentation } from './';
import Location from './location';

import getCol from '../parser/get-col';
import getLine from '../parser/get-line';

export default abstract class Token {
	public readonly raw: string;
	public readonly location: Location;
	public indentation: Indentation | null = null;

	constructor (raw: string, line: number, col: number, startOffset: number) {
		this.raw = raw;
		this.location = new Location(
			line,
			col,
			getLine(raw, line),
			getCol(raw, col),
			startOffset,
			startOffset + raw.length,
		);
	}
}