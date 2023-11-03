import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const siteTitle = 'Vacation Rentals';

export default function Layout({ children }) {
  return (
    <div className={inter.className}>{children}</div>
  )
}
