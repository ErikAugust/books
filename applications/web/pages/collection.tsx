import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Books } from '@eaj/books'
import Link from 'next/link'

export default function Collection({ list }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Collection of Titles | Books</title>
        <meta name="description" content="All titles in Collection" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h2 className={styles.title}>
          Collection
        </h2>
        <ul>
          {list.map((value, index) => {
            return <li key={index}>
              <strong><Link href={`/books/${value.slug}`}><a>{value.title}</a></Link></strong> by {value.author}
            </li>
          })}
        </ul>
      </main>
    </div>
  )
}

export async function getStaticProps(context) {
  const list = new Books().list;
  return {
    props: {
      list: JSON.parse(JSON.stringify(list))
    }, // will be passed to the page component as props
  }
}