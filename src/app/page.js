import Image from 'next/image'
import styles from './page.module.css'
import Topbar from '@/components/topbar/Topbar'
import Homepage from '@/components/homepage/Homepage'

export default function Home() {
  return (
    <main className={styles.main}>
      <Topbar />
      <Homepage />
    </main>
  )
}
