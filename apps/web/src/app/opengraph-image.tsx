import React from "react";
// If using @vercel/og, import as below. Otherwise, fallback to a static image or instruct user to install it.
// import { ImageResponse } from '@vercel/og';
// If not available, you can use a static SVG/PNG or throw a helpful error.

// TODO: If @vercel/og is not installed, instruct user to run:
// npm install @vercel/og
// and then switch the import above.

export const runtime = 'edge';

// If @vercel/og is installed, uncomment the following:
/*
import { ImageResponse } from "@vercel/og";
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          fontSize: 60,
          color: 'white',
          background: 'linear-gradient(to right, #6366F1, #A855F7)',
          width: '100%',
          height: '100%',
          padding: '50px 200px',
          textAlign: 'center',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <svg width="180" height="40" viewBox="0 0 180 40" xmlns="http://www.w3.org/2000/svg">
            <path d="M24.5 8L32 20L24.5 32H9.5L2 20L9.5 8H24.5Z" fill="white" />
            <path d="M24.5 8L32 20L24.5 32H9.5L2 20L9.5 8H24.5Z" stroke="white" strokeWidth="2" />
            <path d="M17 14L22 20L17 26H10L5 20L10 14H17Z" fill="white" fillOpacity="0.3" />
          </svg>
          <h1 style={{ marginTop: 40 }}>WebCraft Pro</h1>
          <p style={{ fontSize: 30, marginTop: 20, opacity: 0.8 }}>
            Premium Website Design & Development Services
          </p>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}
*/

// Fallback: Return a static SVG if @vercel/og is not installed
export default async function Image() {
  const svg = `<?xml version="1.0" encoding="UTF-8"?>
  <svg width="1200" height="630" viewBox="0 0 1200 630" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="1200" height="630" fill="url(#paint0_linear)"/>
    <defs>
      <linearGradient id="paint0_linear" x1="0" y1="0" x2="1200" y2="630" gradientUnits="userSpaceOnUse">
        <stop stop-color="#6366F1"/>
        <stop offset="1" stop-color="#A855F7"/>
      </linearGradient>
    </defs>
    <g>
      <text x="50%" y="45%" text-anchor="middle" fill="white" font-size="60" font-family="Arial" dy=".3em">WebCraft Pro</text>
      <text x="50%" y="60%" text-anchor="middle" fill="white" font-size="30" font-family="Arial" opacity="0.8">Premium Website Design &amp; Development Services</text>
    </g>
  </svg>`;
  
  return new Response(svg, {
    headers: {
      'Content-Type': 'image/svg+xml',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
    status: 200,
  });
}
 
