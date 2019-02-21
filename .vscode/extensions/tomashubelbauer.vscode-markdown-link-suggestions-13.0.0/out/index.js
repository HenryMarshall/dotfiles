"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testRunner = require("vscode/lib/testrunner");
// https://github.com/mochajs/mocha/wiki/Using-mocha-programmatically#set-options
if (process.env.TF_BUILD) {
    testRunner.configure({
        ui: 'tdd',
        useColors: true,
        timeout: 15000,
        reporter: 'mocha-junit-reporter',
        reporterOptions: {
            mochaFile: 'junit.xml',
        }
    });
}
else {
    testRunner.configure({
        ui: 'tdd',
        useColors: true,
        timeout: 15000,
    });
}
module.exports = testRunner;
//# sourceMappingURL=index.js.map