import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Manas Developers',
  description: 'At Manas Builders, our mission is to build a legacy of excellence by delivering superior construction and design solutions that enrich the lives of our clients',
  
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
