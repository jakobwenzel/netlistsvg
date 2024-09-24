'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.render = void 0;
var ELK = require("elkjs");
var onml = require("onml");
var FlatModule_1 = require("./FlatModule");
var Skin_1 = require("./Skin");
var elkGraph_1 = require("./elkGraph");
var drawModule_1 = require("./drawModule");
var elk = new ELK();
function render(skinData, yosysNetlist, done, elkData, configData) {
    var skin = onml.p(skinData);
    Skin_1.default.skin = skin;
    var flatModule = FlatModule_1.FlatModule.fromNetlist(yosysNetlist, configData);
    var kgraph = (0, elkGraph_1.buildElkGraph)(flatModule);
    var promise;
    // if we already have a layout then use it
    if (elkData) {
        promise = new Promise(function (resolve) {
            (0, drawModule_1.default)(elkData, flatModule);
            resolve();
        });
    }
    else {
        // otherwise use ELK to generate the layout
        promise = elk.layout(kgraph, { layoutOptions: FlatModule_1.FlatModule.layoutProps.layoutEngine })
            .then(function (g) { return (0, drawModule_1.default)(g, flatModule); })
            // tslint:disable-next-line:no-console
            .catch(function (e) { console.error(e); });
    }
    // support legacy callback style
    if (typeof done === 'function') {
        promise.then(function (output) {
            done(null, output);
            return output;
        }).catch(function (reason) {
            throw Error(reason);
        });
    }
    return promise;
}
exports.render = render;
