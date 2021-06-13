import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import { Books } from '@eaj/books'
import Layout from '../../components/layout'

export default function Book({ book, list }) {
  return (
    <Layout list={list}>
      <div className={styles.container}>
        <Head>
          <title>{book.title} by {book.author} | Books</title>
          <meta name="description" content={`Books: ${book.title} by ${book.author}`} />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <h2 className={styles.title}>
            {book.title}
          </h2>
          <h3>{book.author}</h3>
          <div>
            { book.quotes && <h4>Quotes</h4>}
            <ul>
            {book.quotes?.map((value, index) => {
              return <li key={index}>
                <i>"{value.text}"</i> ({value.page})
              </li>
            })}
          </ul>
          </div>
        </main>
      </div>
    </Layout>
  )
}

export async function getStaticProps(context) {
  const books = new Books();
  const list = books.list;
  const book = books.findBySlug(context.params.slug);
  return {
    props: { 
      book: JSON.parse(JSON.stringify(book)),
      list: JSON.parse(JSON.stringify(list))
    },
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

