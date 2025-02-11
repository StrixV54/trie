import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Provider } from './provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Trie | Calender, Timeline and More',
  description:
    'Create meetings, timelines, events with advanced controls over calender with ease, includes features like spotify, google notes and more.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Provider>
        <body className={inter.className}>{children}</body>
      </Provider>
    </html>
  )
}
