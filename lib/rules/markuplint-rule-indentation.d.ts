import { Document } from '../parser';
import Rule, { VerifiedReport } from '../rule';
import { Ruleset } from '../ruleset';
/**
 * `Indentation`
 *
 * *Core rule*
 */
export declare class Indentation extends Rule {
    verify(document: Document, ruleset: Ruleset): VerifiedReport[];
}
declare const _default: Indentation;
export default _default;
