export const config = {
  runtime: 'edge',
}

export default function handler(request: Request) {
  return new Response('Edge runtime / TS', {
    status: 200,
    headers: { 'content-type': 'text/plain' },
  })
}
