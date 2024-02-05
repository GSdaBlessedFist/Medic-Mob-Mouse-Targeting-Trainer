import type { Metadata } from 'next'
import { Song_Myung,Inter } from 'next/font/google'
import '../app/styles/globals.scss';


const songMyung = Song_Myung({weight: ['400'],subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Medic Mob Mouse Targeting Trainer',
  description: 'Mouse Targeting Trainer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={songMyung.className}>{children}</body>
    </html>
  )
}
