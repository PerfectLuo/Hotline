
export function getToken () {
  return JSON.parse(sessionStorage.getItem('monitor-user') || '{}').token
}
