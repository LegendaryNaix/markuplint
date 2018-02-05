import { NodeType } from '../dom';
import Node from './node';
export default class InvalidNode<T, O> extends Node<T, O> {
    readonly type: NodeType;
}