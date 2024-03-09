import { type Metadata } from 'next'

import { RootLayout } from '@/components/RootLayout'

import '@/styles/tailwind.css'
import Script from 'next/script'

export const metadata: Metadata = {
  title: {
    template: '%s - LogicLeaps',
    default: 'LogicLeaps - Lets Innovate, Integrate, & Elevate',
  },
  description:
    'We specialize in crafting custom MVP/SAAS software, applications, and systems to fit your unique business needs. Our expert team ensures innovation, efficiency, and reliability in every solution. Choose us for bespoke IT solutions that align perfectly with your goals and processes.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full bg-neutral-950 text-base antialiased">
      <head>
        <meta name="robots" content="follow,index" />
        <meta
          name="keywords"
          content="logicleaps, logic leaps, consultancy, it solutions, logicleaps solutions, logicleaps technologies, custom software development, mobile applicationn development, it company in pakistan, ssoftwaree company, digital consultancy, cloud consultancy"
        />
        <link rel="canonical" href="https://logicleaps.com/"></link>
      </head>
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
