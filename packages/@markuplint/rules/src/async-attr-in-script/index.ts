import { Result, createRule } from '@markuplint/ml-core';

export default createRule<'always' | 'never'>({
	name: 'async-attr-in-script',
	defaultLevel: 'warning',
	defaultValue: 'always',
	defaultOptions: null,
	async verify(document, messages) {
		const results: Result[] = [];
		await document.walkOn('Element', async elem => {
			if (!elem.matches('script[src]')) {
				return;
			}
			const hasAsyncAttr = !elem.hasAttribute('async');
			let bad = false;
			let necessary: string;
			switch (elem.rule.value) {
				case 'always': {
					necessary = 'Required {0}';
					bad = hasAsyncAttr;
					break;
				}
				case 'never': {
					necessary = 'Not required {0}';
					bad = !hasAsyncAttr;
					break;
				}
				default: {
					return;
				}
			}
			if (bad) {
				const message = messages(necessary, '{$} attribute');
				results.push({
					severity: elem.rule.severity,
					message: message.replace('{$}', 'async'),
					line: elem.startLine,
					col: elem.startCol,
					raw: elem.raw,
				});
			}
		});
		return results;
	},
});
