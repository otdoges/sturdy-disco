import { ImageResponse } from 'next/og'
 
export const runtime = 'edge'
 
export async function GET() {
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
  )
}
