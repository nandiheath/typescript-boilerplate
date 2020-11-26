"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const index_1 = require("../src/index");
describe('helloWorld function', () => {
    // Act before assertions
    beforeAll(() => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    }));
    // Assert if helloWorld function returns the correct value
    it('should returns correct string', () => {
        expect(index_1.helloWorld()).toBe('Hello, World!');
    });
});
//# sourceMappingURL=index.test.js.map