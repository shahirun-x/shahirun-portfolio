// app/layout.tsx
import './globals.css';
import React from 'react';

export const metadata = {
  title: 'Shahirun — AI Engineer',
  description: 'Research-driven ML, LLMs, RAG, and Computer Vision projects.',
  metadataBase: new URL('https://shahirun-portfolio.vercel.app'), // <-- add this
  openGraph: {
    // ...
    url: 'https://shahirun-portfolio.vercel.app',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Shahirun — AI Engineer' }]
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/og.png']
  }
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#000000" />
        <link rel="icon" href="/favicon.ico" />
        {/* Legacy meta tags for broad compatibility */}
        <meta property="og:title" content={metadata.title as string} />
        <meta property="og:description" content={metadata.description as string} />
        <meta property="og:image" content="/og.png" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title as string} />
        <meta name="twitter:description" content={metadata.description as string} />
        <meta name="twitter:image" content="/og.png" />
      </head>
      <body className="bg-black text-gray-100 antialiased">
        {/*
          Keep your Nav component or header here if you have one.
          Example: <Nav />
        */}
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  );
}
