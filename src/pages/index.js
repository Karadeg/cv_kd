import { Inter } from 'next/font/google'
import Homepage from './../components/Homepage/Homepage'
import Cursor from './../components/Cursor/Cursor'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <>
      <Cursor/>
      <Homepage/>
    </>
  )
}
