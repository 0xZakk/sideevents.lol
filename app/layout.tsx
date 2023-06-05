import './globals.css'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

import HeaderNav from "../components/HeaderNav"

export const metadata = {
  title: 'Sideevents.lol',
  description: 'Find the best side events at your next conference',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <HeaderNav />
        {children}
      </body>
    </html>
  )
}
