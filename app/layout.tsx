import { Metadata } from 'next';

import './globals.css'
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ToastContainer } from './nexttoast';
import 'react-toastify/dist/ReactToastify.css';

export const metadata: Metadata = {
  title: {
    template: '%s | Ticket',
    default: 'Ticket',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" style={{scrollBehavior:'smooth'}}>
      <body>
        <Navbar />
        <main className="relative overflow-hidden">
          {children}
        </main>
        <ToastContainer/>
        <Footer />
      </body>
    </html>
  )
}
