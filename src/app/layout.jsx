import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'NFT Market',
  description: 'NFT Market',
  keywords: 'NFT Market',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
  />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
