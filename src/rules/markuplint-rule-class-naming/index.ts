import { VerifyReturn } from '../../rule';
import CustomRule from '../../rule/custom-rule';
import messages from '../messages';

export type Value = string | string[] | null;
export type Options = null;

export default CustomRule.create<Value, Options>({
	name: 'class-naming',
	defaultLevel: 'warning',
	defaultValue: null,
	defaultOptions: null,
	async verify (document, locale) {
		const reports: VerifyReturn[] = [];
		// const message = await messages(locale, `{0} of {1} ${ms} be {2}`, 'Attribute name', 'HTML', `${config.value}case`);
		await document.walkOn('Element', async (node) => {
			if (!node.rule) {
				return;
			}
			if (node.rule.value) {
				const classPatterns = Array.isArray(node.rule.value) ? node.rule.value : [node.rule.value];
				for (const classPattern of classPatterns) {
					for (const className of node.classList) {
						if (!match(className, classPattern)) {
							const attr = node.getAttribute('class');
							if (!attr) {
								continue;
							}
							reports.push({
								severity: node.rule.severity,
								message: `"${className}" class name is unmatched pattern of "${classPattern}"`,
								line: attr.location.line,
								col: attr.location.col,
								raw: attr.raw,
							});
						}
					}
				}
			}
		});
		return reports;
	},
});

function match (needle: string, pattern: string) {
	const matches = pattern.match(/^\/(.*)\/(i|g|m)*$/);
	if (matches && matches[1]) {
		const re = matches[1];
		const flag = matches[2];
		return new RegExp(re, flag).test(needle);
	}
	return needle === pattern;
}
