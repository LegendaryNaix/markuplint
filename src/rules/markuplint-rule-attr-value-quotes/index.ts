import { VerifyReturn } from '../../rule';
import CustomRule from '../../rule/custom-rule';

export type Value = 'double' | 'single';

const quote = {
	double: '"',
	single: "'",
};

export default CustomRule.create<Value, null>({
	name: 'attr-value-quotes',
	defaultLevel: 'warning',
	defaultValue: 'double',
	defaultOptions: null,
	async verify (document, messages) {
		const reports: VerifyReturn[] = [];
		await document.walkOn('Element', async (node) => {
			if (!node.rule) {
				return;
			}
			const message = messages('{0} is must {1} on {2}', 'Attribute value', 'quote', `${node.rule.value} quotation mark`);
			for (const attr of node.attributes) {
				if (attr.value != null && attr.value.quote !== quote[node.rule.value]) {
					reports.push({
						severity: node.rule.severity,
						message,
						line: attr.location.line,
						col: attr.location.col,
						raw: attr.raw,
					});
				}
			}
		});
		return reports;
	},
});
