export function requiredFields(value) {
  return value ? undefined : 'Field is required'
}

//Closures:
export function maxLengthCreator(maxLength) {
  return function (value) {
    return (value.length > maxLength) ? `Max length more ${maxLength} symbols` : undefined
  }
}