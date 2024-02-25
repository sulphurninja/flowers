"use client"

import { useState, useEffect } from 'react';
import "@/styles/globals.css";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { Providers } from "@/components/providers";
import { SiteBlob } from "@/components/site-blob";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

// Import your spinner/loading image or component
import Loader from "@/components/Loader";

export const metadata: Metadata = {
  title: 'Prasad Agro',
  description: siteConfig.description,
  icons: {
    icon: '/favicon.ico'
  }
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate an asynchronous action (e.g., fetching data) that takes time
    const fetchData = async () => {
      // Simulate a delay (you can replace this with your actual async action)
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Set loading to false when the data is fetched
      setLoading(false);
    };

    // Call the fetchData function
    fetchData();
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable
          )}
        >
          <Providers>
            {/* Conditionally render the loader based on the loading state */}
            {loading && <Loader />}
            <div className={`relative flex min-h-screen flex-col ${loading ? 'hidden' : ''}`}>
              <SiteHeader />
              <SiteBlob />
              <div className="flex-1">{children}</div>
              <SiteFooter />
            </div>
          </Providers>
        </body>
      </html>
    </>
  )
}

