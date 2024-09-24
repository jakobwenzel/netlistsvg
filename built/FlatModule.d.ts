import Yosys from './YosysModel';
import Config from './ConfigModel';
import Cell from './Cell';
export interface FlatPort {
    key: string;
    value?: number[] | Yosys.Signals;
    parentNode?: Cell;
    wire?: Wire;
}
export interface Wire {
    netName: string;
    drivers: FlatPort[];
    riders: FlatPort[];
    laterals: FlatPort[];
}
export declare class FlatModule {
    static netlist: Yosys.Netlist;
    static skin: any;
    static layoutProps: {
        [x: string]: any;
    };
    static modNames: string[];
    static config: Config;
    static fromNetlist(netlist: Yosys.Netlist, config: Config): FlatModule;
    parent: string;
    moduleName: string;
    nodes: Cell[];
    wires: Wire[];
    constructor(mod: Yosys.Module, name: string, depth: number, parent?: string);
    addConstants(): void;
    addSplitsJoins(): void;
    createWires(): void;
}
export interface SigsByConstName {
    [constantName: string]: number[];
}
export declare function arrayToBitstring(bitArray: number[]): string;
export declare function addToDefaultDict(dict: any, key: string, value: any): void;
export interface NameToPorts {
    [netName: string]: FlatPort[];
}
export declare function removeDups(inStrs: string[]): string[];
