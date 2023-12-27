import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import '../globals.css'

const poppins = Poppins({weight:['400','500','600','700','800'],subsets:['latin']})

export const metadata: Metadata = {
  title: 'TemplateMonks',
  description: 'TemplateMonks',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='dark'>
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
