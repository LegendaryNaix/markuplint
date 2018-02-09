import GhostNode from './ghost-node';
import Node from './node';

export type NodeType = 'Node' | 'Element' | 'OmittedElement' | 'Text' | 'RawText' | 'Comment' | 'EndTag' | 'Doctype' | 'Invalid' | null;

export interface Indentation {
	type: 'tab' | 'space' | 'mixed';
	width: number;
	raw: string;
	line: number;
}

export interface Location {
	line: number | null;
	col: number | null;
	startOffset: number | null;
	endOffset: number | null;
}

export interface ExistentLocation {
	line: number;
	col: number;
	startOffset: number;
	endOffset: number;
}

export interface TagNodeLocation extends ExistentLocation {
}

export interface ElementLocation extends TagNodeLocation {
	startTag: TagNodeLocation;
	endTag: TagNodeLocation | null;
}

export type AmbiguousNode<T, O> = Node<T, O> | GhostNode<T, O> | null;
