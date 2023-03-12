import { Inter } from 'next/font/google'
import Homepage from './../components/Homepage/Homepage'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <Homepage/>
  )
}
