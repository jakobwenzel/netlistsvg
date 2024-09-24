declare namespace Yosys {
    enum ConstantVal {
        Zero = "0",
        One = "1",
        X = "x"
    }
    export type Signals = (number | ConstantVal)[];
    interface ModuleMap {
        [moduleName: string]: Module;
    }
    export interface Netlist {
        modules: ModuleMap;
    }
    interface ModuleAttributes {
        top?: number | string;
        [attrName: string]: any;
    }
    interface NetAttributes {
        [attrName: string]: any;
    }
    export interface CellAttributes {
        value?: string;
        [attrName: string]: any;
    }
    export enum Direction {
        Input = "input",
        Output = "output"
    }
    export interface ExtPort {
        direction: Direction;
        bits: Signals;
    }
    interface ExtPortMap {
        [portName: string]: ExtPort;
    }
    export interface PortDirMap {
        [portName: string]: Direction;
    }
    export interface PortConnectionMap {
        [portName: string]: Signals;
    }
    export interface Cell {
        type: string;
        port_directions: PortDirMap;
        connections: PortConnectionMap;
        attributes?: CellAttributes;
        hide_name?: HideName;
        parameters?: {
            [key: string]: any;
        };
    }
    export function getInputPortPids(cell: Cell): string[];
    export function getOutputPortPids(cell: Cell): string[];
    interface CellMap {
        [cellName: string]: Cell;
    }
    enum HideName {
        Hide = 0,
        NoHide = 1
    }
    interface Net {
        bits: Signals;
        hide_name: HideName;
        attributes: NetAttributes;
    }
    interface NetNameMap {
        [netName: string]: Net;
    }
    export interface Module {
        ports: ExtPortMap;
        cells: CellMap;
        netNames: NetNameMap;
        attributes?: ModuleAttributes;
    }
    export {};
}
export default Yosys;