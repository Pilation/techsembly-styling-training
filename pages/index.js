import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Box, Typography, Button, Stack, IconButton } from '@mui/system'

export default function Home() {
  return (
    <>
      <Head>
        <title>Techsembly</title>
        <meta name="description" content="Techsembly styling training" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Stack>
        <Button>Announcement</Button>
<Typography>Try Techsembly today for a 12 day free trial period. No Additional costs/Unexpected fees</Typography>
<IconButton></IconButton>
</Stack>

      </header>

      <main className={styles.main}>
        
      </main>

      <footer className={styles.footer}>
        
      </footer>
      </>
  )
}
