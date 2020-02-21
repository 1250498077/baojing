export function savaToLocal(id, value) {
  sessionStorage.setItem(id, value)
}
export function loadFromlLocal(id) {
  return sessionStorage.getItem(id)
}
export function bianli(data) {
  let duix = '?'
  Object.keys(data).forEach(function (key) {
    duix = duix + key + '=' + data[key] + '&'
  })
  duix = duix.substr(0, duix.length - 1)
  return duix
}
