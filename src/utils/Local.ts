function set(key, value) {
  if (value) {
    localStorage.setItem(key, JSON.stringify(value))
  }
}

function get(key) {

  return JSON.parse(localStorage.getItem(key) || '[]')
}

export default {
  set,
  get
}

