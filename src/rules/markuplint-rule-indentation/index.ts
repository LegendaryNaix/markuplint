import {
	CustomRule,
	VerifyReturn,
} from '../../rule';
import messages from '../messages';

export type Value = 'tab' | number;

export default CustomRule.create<Value, null>({
	name: 'indentation',
	defaultLevel: 'warning',
	defaultValue: 2,
	defaultOptions: null,
	async verify (document, locale) {
		const reports: VerifyReturn[] = [];
		await document.walkOn('Node', async (node) => {
			if (!node.rule) {
				return;
			}
			const ms = node.rule.level === 'error' ? 'must' : 'should';
			console.log(node.rule, node.indentation);
			if (node.indentation) {
				let spec: string | null = null;
				if (node.rule.value === 'tab' && node.indentation.type !== 'tab') {
					spec = 'tab';
				} else if (typeof node.rule.value === 'number' && node.indentation.type !== 'space') {
					spec = 'space';
				} else if (typeof node.rule.value === 'number' && node.indentation.type === 'space' && node.indentation.width % node.rule.value) {
					spec = await messages(locale, `{0} width spaces`, `${node.rule.value}`);
				}
				if (spec) {
					const message = await messages(locale, `{0} ${ms} be {1}`, 'Indentation', spec);
					if (node.rule == null) {
						console.log(node.raw);
						console.trace(123);
						throw new Error('node.rule is never????');
					}
					reports.push({
						level: node.rule.level,
						message,
						line: node.indentation.line,
						col: 1,
						raw: node.indentation.raw,
					});
				}
			}
		});
		return reports;
	},
});
