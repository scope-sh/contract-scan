// eslint-disable-next-line import/prefer-default-export
export function GET(): Response {
  return new Response(`Hello from ${process.env.VERCEL_REGION}`);
}