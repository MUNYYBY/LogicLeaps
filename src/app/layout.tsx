import { type Metadata } from 'next'

import { RootLayout } from '@/components/RootLayout'

import '@/styles/tailwind.css'
import Script from 'next/script'

export const metadata: Metadata = {
  title: {
    template: '%s - LogicLeaps',
    default: 'LogicLeaps - Innovate Integrate Elevate',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full bg-neutral-950 text-base antialiased">
      <body className="flex min-h-full flex-col">
        <RootLayout>{children}</RootLayout>
      </body>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-DVX6GV9QGK"
        strategy="afterInteractive"
      ></Script>
      <Script id="google-analytics" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-DVX6GV9QGK')`}
      </Script>
    </html>
  )
}
