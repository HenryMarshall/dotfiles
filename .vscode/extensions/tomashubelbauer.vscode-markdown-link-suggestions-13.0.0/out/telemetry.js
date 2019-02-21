"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode_extension_telemetry_1 = require("vscode-extension-telemetry");
// TODO: Figure out why it doesn't seem to work even with telemetry.d.ts
// @ts-ignore
const package_json_1 = require("../package.json");
exports.default = new vscode_extension_telemetry_1.default(package_json_1.name, package_json_1.version, '040cd0bb-5c25-401e-8454-63ef0b1edf7e');
//# sourceMappingURL=telemetry.js.map