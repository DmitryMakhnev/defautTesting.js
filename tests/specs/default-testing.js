var defaultTesting = require('default-testing');

describe('defaultTesting: main', function () {
    it('defaultTesting is define', function () {
        expect(defaultTesting).toBeDefined();
    });

    describe('defaultTesting.utils', function () {
        it('is define', function () {
            expect(defaultTesting.utils).toBeDefined();
        });
        it('is object', function () {
            expect(defaultTesting.utils).toEqual(jasmine.any(Object));
        });
    });

    describe('defaultTesting.exports', function () {
        it('is define', function () {
            expect(defaultTesting.exports).toBeDefined();
        });
        it('is object', function () {
            expect(defaultTesting.exports).toEqual(jasmine.any(Object));
        });
    });

});