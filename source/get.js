'use strict'

const get = (object, properties) => {
  if (properties == null || object == null) {
    return undefined
  }
  properties = properties.match(/(\.\w+)/g)
  if (properties === null) {
    return object
  }
  properties = properties.map((str) => str.slice(1))
  let result = object
  for (let i = 0; i < properties.length && result !== undefined; i++) {
    result = result[properties[i]]
  }
  return result
}
