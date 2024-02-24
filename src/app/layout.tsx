import type { Metadata } from 'next'
import { Jost } from 'next/font/google'
import './globals.css'
import clsx from 'clsx'
import Sidebar from '@/components/sidebar'
import { Footer } from '@/components/footer'

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
          <Sidebar className="absolute top-[50%] left-[20%] translate-x-[-50%] translate-y-[-50%]">
            <Sidebar.Menu>
              <Sidebar.Menu.Item href="/" exact>About</Sidebar.Menu.Item>
              <Sidebar.Menu.Item href="/experience">Experience</Sidebar.Menu.Item>
              <Sidebar.Menu.Item href="/projects">Projects</Sidebar.Menu.Item>
              <Sidebar.Menu.Item href="/posts">Blog</Sidebar.Menu.Item>
              <Sidebar.Menu.Item href="/contact">Contact</Sidebar.Menu.Item>
            </Sidebar.Menu>

            <Sidebar.Footer className="text-green-300">
              Surprise me!
            </Sidebar.Footer>
          </Sidebar>
        <main className="grow shrink basis-full flex flex-col">
          {children}
          <Footer className="mt-auto"/>
        </main>
      </body>
    </html>
  )
}
