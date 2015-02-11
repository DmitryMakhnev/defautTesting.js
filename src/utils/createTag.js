var cycle = require('default-lib').cycle;
var singletonHTMLTags = ['img', 'input', 'br', 'hr', 'link', 'meta', 'source', 'area', 'embed', 'param', 'base', 'col', 'command'];

/**
 *
 * @param {String} tagName
 * @param {Object} attributes
 * @param {String} contentItem html text
 * @return {String} html text
 */
module.exports = function (tagName, attributes, contentItem) {
    var attributesString = '',
        content = '',
        result;
    if (attributes) {
        cycle(attributes, function (value, key) {
            attributesString += ' ' + key + '="' + value + '"';
        });
    }
    if (singletonHTMLTags.indexOf(tagName) === -1) {
        if (contentItem) {
            cycle(arguments, function (contentItem) {
                content += contentItem;
            }, null, null, 1, 2);
        }
        result = '<' + tagName + attributesString + '>' + content + '</' + tagName + '>';
    } else {
        result = '<' + tagName + attributesString + ' />';
    }

    return result;
};