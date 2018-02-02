import * as fs from 'fs';
import * as path from 'path';
import * as util from 'util';

import Markuplint from './core';
import CustomRule from './rule/custom-rule';

import { VerifiedResult } from './rule';
import ruleModulesLoader from './rule/loader';

import Ruleset from './ruleset';
import { ConfigureFileJSON } from './ruleset/JSONInterface';
import osLocale from './util/osLocale';

const readFile = util.promisify(fs.readFile);

export async function verify (html: string, config: ConfigureFileJSON, rules: CustomRule[], locale?: string) {
	if (!locale) {
		locale = await osLocale();
	}
	const ruleset = await Ruleset.create(config, rules);
	const core = new Markuplint(html, ruleset, locale);
	return await core.verify();
}

export async function verifyOnWorkspace (html: string, workspace?: string) {
	workspace = workspace ? workspace : process.cwd();
	const locale = await osLocale();
	const rules = await ruleModulesLoader();
	const ruleset = await Ruleset.create(workspace, rules);
	const core = new Markuplint(html, ruleset, locale);
	return await core.verify();
}

export async function verifyFile (filePath: string, rules?: CustomRule[], configFileOrDir?: string, locale?: string) {
	if (!locale) {
		locale = await osLocale();
	}
	rules = rules || await ruleModulesLoader();
	let ruleset: Ruleset;
	if (configFileOrDir) {
		ruleset = await Ruleset.create(configFileOrDir, rules);
	} else {
		const absFilePath = path.resolve(filePath);
		const parsedPath = path.parse(absFilePath);
		const dir = path.dirname(absFilePath);
		ruleset = await Ruleset.create(dir, rules);
	}
	const html = await readFile(filePath, 'utf-8');
	const core = new Markuplint(html, ruleset, locale);
	const reports = await core.verify();
	return {
		html,
		reports,
	};
}
