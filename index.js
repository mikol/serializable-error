// @ts-ignore: TS2339: Property 'toJSON' does not exist on type 'Error'.
if (!Error.prototype.toJSON) {
    // @ts-ignore: TS2339: Property 'toJSON' does not exist on type 'Error'.
    Error.prototype.toJSON = function () {
        return transform(this);
    };
}
var corePropertyNames = ['type', 'message', 'stack'];
function transform(error) {
    var object = { type: error.constructor.name || '' };
    object.message = error.message;
    if (error.stack) {
        var items = error.stack.split(/\r\n?|\n/);
        if (!object.type) {
            object.type = items[0].replace(/^([^:\s]+)(:?\s?.*?)?:.*$/, '$1');
        }
        object.stack = items.slice(1).map(function (x) { return x.replace(/^\s+?at (\S.*)$/, '$1'); });
    }
    Object.getOwnPropertyNames(error).sort().forEach(function (propertyName) {
        if (corePropertyNames.indexOf(propertyName) === -1) {
            object[propertyName] = error[propertyName];
        }
    });
    return object;
}
