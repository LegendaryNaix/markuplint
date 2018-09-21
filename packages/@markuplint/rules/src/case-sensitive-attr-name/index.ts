import { createRule, Result } from '@markuplint/ml-core';

export type Value = 'no-upper' | 'no-lower';

export default createRule<Value, null>({
	name: 'case-sensitive-attr-name',
	defaultLevel: 'warning',
	defaultValue: 'no-upper',
	defaultOptions: null,
	async verify(document, messages) {
		const reports: Result[] = [];
		await document.walkOn('Element', async node => {
			const ms = node.rule.severity === 'error' ? 'must' : 'should';
			const deny = node.rule.value === 'no-upper' ? /[A-Z]/ : /[a-z]/;
			const cases = node.rule.value === 'no-upper' ? 'lower' : 'upper';
			const message = messages(`{0} of {1} ${ms} be {2}`, 'Attribute name', 'HTML', `${cases}case`);
			if (node.namespaceURI === 'http://www.w3.org/1999/xhtml') {
				if (node.attributes) {
					for (const attr of node.attributes) {
						if (deny.test(attr.name.raw)) {
							reports.push({
								severity: node.rule.severity,
								message,
								line: attr.startLine,
								col: attr.startCol,
								raw: attr.name.raw,
							});
						}
					}
				}
			}
		});
		return reports;
	},
	// async fix(document) {
	// 	await document.walkOn('Element', async node => {
	// 		if (node.namespaceURI === 'http://www.w3.org/1999/xhtml') {
	// 			if (node.attributes) {
	// 				for (const attr of node.attributes) {
	// 					if (node.rule.value === 'no-upper') {
	// 						attr.name.fix(attr.name.raw.toLowerCase());
	// 					} else {
	// 						attr.name.fix(attr.name.raw.toUpperCase());
	// 					}
	// 				}
	// 			}
	// 		}
	// 	});
	// },
});
