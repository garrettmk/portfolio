import type { Metadata } from 'next'
import { Jost } from 'next/font/google'
import './globals.css'
import clsx from 'clsx'
import Sidebar from '@/components/sidebar'

const jost = Jost({ subsets: ['latin'] })

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
    <html lang="en" className="h-screen">
      <body className={clsx(jost.className, 'min-h-screen flex bg-slate-900 text-slate-50')}>
        <Sidebar className="backdrop-blur-[3px] backdrop-brightness-[.85] border-r border-slate-800 sticky top-0 h-screen self-start">
          <Sidebar.Item href="/" exact>About</Sidebar.Item>
          <Sidebar.Item href="/experience">Experience</Sidebar.Item>
          <Sidebar.Item href="/projects">Projects</Sidebar.Item>
          <Sidebar.Item href="/posts">Blog</Sidebar.Item>
          <Sidebar.Item href="/contact">Contact</Sidebar.Item>
        </Sidebar>
        <main className="grow shrink basis-full">
          {children}
        </main>
      </body>
    </html>
  )
}
