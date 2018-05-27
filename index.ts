// @ts-ignore: TS2339: Property 'toJSON' does not exist on type 'Error'.
if (!Error.prototype.toJSON) {
  // @ts-ignore: TS2339: Property 'toJSON' does not exist on type 'Error'.
  Error.prototype.toJSON = function () {
    return transform(this)
  }
}

const corePropertyNames = ['type', 'message', 'stack']

function transform(error: Error) {
  const object: {[k: string]: any} = {type: (<any>error).constructor.name || ''}

  object.message = error.message

  if (error.stack) {
    const items = error.stack.split(/\r\n?|\n/)

    if (!object.type) {
      object.type = items[0].replace(/^([^:\s]+)(:?\s?.*?)?:.*$/, '$1')
    }

    object.stack = items.slice(1).map((x) => x.replace(/^\s+?at (\S.*)$/, '$1'))
  }

  Object.getOwnPropertyNames(error).sort().forEach((propertyName) => {
    if (corePropertyNames.indexOf(propertyName) === -1) {
      object[propertyName] = (error as {[k: string]: any})[propertyName]
    }
  })

  return object
}
