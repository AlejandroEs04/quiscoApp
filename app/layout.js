import Sidebar from '../components/Sidebar'
import '../styles//globals.css'
import { Inter } from 'next/font/google'
import { QuioscoProvider } from '../context/QuioscoProvider'
import ModalContainer from '../components/ModalContainer'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Cafe',
  description: 'Quiosco App',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <QuioscoProvider>
        <body className={inter.className}> 
          <div className='md:flex'>
            <aside className='md:w-4/12 xl:1/4 2xl:w-1/5'>
              <Sidebar />
            </aside>

            <main className='md:w-8/12 xl:3/4 2xl:w-4/5 h-screen overflow-y-scroll'>
              <div className='p-10 mt-10'>
                {children}
              </div>
              
            </main>
          </div>
        </body>

        <ModalContainer />
        
      </QuioscoProvider>
    </html>
  )
}
