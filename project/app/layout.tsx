'use client';

import './globals.css';
import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Preloader from '@/components/Preloader';
import ThemeProvider from '@/components/ThemeProvider';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 3200);
    return () => clearTimeout(t);
  }, []);

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>DatAInspire – KDU AI & Data Science Club</title>
        <meta name="description" content="DatAInspire is the official AI & Data Science Club at General Sir John Kotelawala Defence University. Empowering future innovators in AI, ML, and Data Science." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ThemeProvider>
          <Preloader />
          <div
            className="min-h-screen flex flex-col"
            style={{
              opacity: loaded ? 1 : 0,
              transition: 'opacity 0.5s ease',
            }}
          >
            <Navbar />
            <div className="flex-1">
              {children}
            </div>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
