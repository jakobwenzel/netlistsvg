import Yosys from './YosysModel';
import Config from './ConfigModel';
import { ElkModel } from './elkGraph';
type ICallback = (error: Error, result?: string) => void;
export declare function render(skinData: string, yosysNetlist: Yosys.Netlist, done?: ICallback, elkData?: ElkModel.Graph, configData?: Config): any;
export {};
