import { ElkModel } from './elkGraph';
import { FlatModule } from './FlatModule';
import onml = require('onml');
export default function drawModule(g: ElkModel.Graph, module: FlatModule): string;
export declare function drawSubModule(c: ElkModel.Cell, subModule: FlatModule): onml.Element;
export declare function removeDummyEdges(g: ElkModel.Graph | ElkModel.Cell): void;
