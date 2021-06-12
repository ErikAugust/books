import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import { Books } from '@eaj/books'

export default function Book({ book }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>{book.title} by {book.author} | Books</title>
        <meta name="description" content="All titles in Collection" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h2 className={styles.title}>
          {book.title}
        </h2>
        <h3>{book.author}</h3>
      </main>
    </div>
  )
}

export async function getStaticProps(context) {
  const books = new Books();
  const book = books.findBySlug(context.params.slug);
  return {
    props: { book: JSON.parse(JSON.stringify(book)) }, // will be passed to the page component as props
  }
}

export async function getStaticPaths() {
  const list = new Books().list;
  return {
    paths: list.map((item) => ({
      params: {
        slug: item.slug,
        title: item.title
      },
    })),
    fallback: false
  };
}

