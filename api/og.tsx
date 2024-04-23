import type { VercelRequest } from '@vercel/node';
import { ImageResponse } from '@vercel/og';
import React from 'react';
import { isAddress } from 'viem';

export const config = {
  runtime: 'edge',
};
export default function handler(request: VercelRequest): Response {
  try {
    if (!request.url) {
      return new Response(`Failed to generate the image`, {
        status: 400,
      });
    }
    const { pathname } = new URL(request.url);
    const tokens = pathname.split('/').at(-1);
    const address = tokens && isAddress(tokens) ? tokens : null;

    if (!address) {
      return new ImageResponse(
        (
          <div
            style={{
              display: 'flex',
              height: '100%',
              width: '100%',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              gap: 44,
              backgroundImage:
                'linear-gradient(to bottom right, #0A0A0C, #17171E)',
              letterSpacing: -1,
              fontWeight: 400,
              textAlign: 'center',
            }}
          >
            <div
              style={{
                color: '#EDEDED',
                fontSize: 48,
              }}
            >
              Contract Scan
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                color: '#A1A1A1',
                fontSize: 32,
                gap: 4,
              }}
            >
              <div>Search deployed contracts</div>
              <div>across 50+ EVM chains</div>
            </div>
          </div>
        ),
        {
          width: 1200,
          height: 630,
        },
      );
    }

    return new ImageResponse(
      (
        <div
          style={{
            display: 'flex',
            height: '100%',
            width: '100%',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            flexDirection: 'column',
            gap: 44,
            backgroundImage:
              'linear-gradient(to bottom right, #0A0A0C, #17171E)',
            letterSpacing: -1,
            fontWeight: 400,
            textAlign: 'center',
            padding: 32,
          }}
        >
          <div
            style={{
              color: '#A1A1A1',
              fontSize: 24,
            }}
          >
            Contract Scan
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 32,
            }}
          >
            <div
              style={{
                color: '#EDEDED',
                fontSize: 48,
                gap: 32,
              }}
            >
              Contract
            </div>
            <div
              style={{
                color: '#7B7B7B',
                background: '#1B1B1B',
                borderRadius: 8,
                fontSize: 36,
                padding: '4px 8px',
                fontFamily: 'monospace',
              }}
            >
              {address}
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      },
    );
  } catch (e) {
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
