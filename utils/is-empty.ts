export const isEmpty = (x: any) => {
  // test results
  //---------------
  // []        true, empty array
  // {}        true, empty object
  // null      true
  // undefined true
  // ""        true, empty string
  // ''        true, empty string
  // 0         false, number
  // true      false, boolean
  // false     false, boolean
  // Date      false
  // function  false

  if (x === undefined) return true

  if (
    typeof x == 'function' ||
    typeof x == 'number' ||
    typeof x == 'boolean' ||
    Object.prototype.toString.call(x) === '[object Date]'
  ) {
    return false
  }

  if (x === '') return true
  if (x == null) return true
  if (Array.isArray(x) && x.length === 0) return true
  if (typeof x == 'undefined') return true

  if (typeof x == 'object') {
    let r = true
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    for (const f in x) r = false

    return r
  }

  return false
}
