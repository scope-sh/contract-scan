import { ImageResponse } from '@vercel/og';
import type { VercelRequest } from '@vercel/node';
 
export const config = {
  runtime: 'edge',
};
export default function handler(request: VercelRequest) {
  try {
    if (!request.url)  {
      return new Response(`Failed to generate the image`, {
        status: 400,
      });
    }
    const { searchParams } = new URL(request.url);
 
    // ?title=<title>
    const hasTitle = searchParams.has('title');
    const title = hasTitle
      ? searchParams.get('title')?.slice(0, 100)
      : 'My default title';
 
    return new ImageResponse(
      (
        <div>{ title }</div>
      ),
      {
        width: 1200,
        height: 630,
      },
    );
  } catch (e: any) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}