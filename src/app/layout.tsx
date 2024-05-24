import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import clsx from 'clsx'
import type { Metadata } from 'next'
import { Jost } from 'next/font/google'
import './globals.css'

const jost = Jost({ 
  subsets: ['latin'],
  display: 'swap'
});

export const metadata: Metadata = {
  title: 'Garrett Myrick',
  description: 'Personal Portfolio & Blog of Garrett Myrick',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="min-h-screen">
      <body className={clsx(jost.className, 'flex flex-col min-h-screen bg-slate-900 text-slate-50')}>
        <Header className="sticky top-0 z-10" />
        {children}
        <Footer className="mt-auto"/>
      </body>
    </html>
  )
}
