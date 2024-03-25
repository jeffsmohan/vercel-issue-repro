export const config = {
  runtime: 'edge',
}

export default function handler(request) {
  return new Response('Edge runtime / JS', {
    status: 200,
    headers: { 'content-type': 'text/plain' },
  })
}
