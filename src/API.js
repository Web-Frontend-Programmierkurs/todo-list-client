const HOST = 'https://desolate-cove-67356.herokuapp.com'

export function createTodo(data) {
  return makeApiRequest('POST', '/todos', data)
}

export function deleteTodo(id) {
  return makeApiRequest('DELETE', `/todos/${id}`)
}

export function getTodos() {
  return makeApiRequest('GET', '/todos')
}

export function updateTodo(id, data) {
  return makeApiRequest('PATCH', `/todos/${id}`, data)
}

async function makeApiRequest(method, url, body) {
  const request = new Request(HOST + url, {
    body: body ? JSON.stringify(body) : undefined,
    headers: new Headers({
      'Content-Type': 'application/json',
    }),
    method,
    mode: 'cors',
  })
  const response = await fetch(request)
  return await response.json()
}
