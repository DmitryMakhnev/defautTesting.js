var getObjectSafely = require('default-lib').getObjectSafely;
var defaultTesting = require('default-testing');

describe('defaultTesting: exports', function () {
    it('it\'s works', function (done) {
        (function () {
            /*@defaultTesting.exports*/

            getObjectSafely(
                defaultTesting.exports,
                'exportsNamespace',
                'subsection'
                ).privateFunctionForCheckTrue = function (verifiable) {
                    return verifiable === true;
                };

            /*@/defaultTesting.exports*/

        } ());

        setTimeout(function () {
            expect(defaultTesting.exports.exportsNamespace.subsection.privateFunctionForCheckTrue(true)).toBeTruthy();
            done();
        }, 1);

    });
});