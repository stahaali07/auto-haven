import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Auto Haven',
  description: 'Rent the best cars - easily and quickly.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  )
}
