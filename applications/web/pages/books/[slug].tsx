import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Book.module.css'
import { Books } from '@eaj/books'
import Layout from '../../components/layout'
import { Tabs, Tab } from 'react-bootstrap'


export default function Book({ book, list }) {
  return (
    <Layout list={list}>
      <div className={styles.container}>
        <Head>
          <title>{book.title} by {book.author} | Books</title>
          <meta name="description" content={`Books: ${book.title} by ${book.author}`} />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className="row featurette">
          <div className="col-md-7">
            <h1>{book.title}</h1>
            <h3><span className="text-muted">{book.author}</span></h3>
            <p className="lead">{book.description}</p>
            <Tabs defaultActiveKey="quotes" id="tab">
              <Tab eventKey="Quotes" title={`Quotes (${book.quotes.length})`}>
                <div>
                  <ul>
                  {book.quotes?.map((value, index) => {
                    return <li className={styles.quotes} key={index}>
                      <i>"{value.text}"</i> ({value.page})
                    </li>
                  })}
                </ul>
                </div>
              </Tab>
            </Tabs>
          </div>
          <div className="col-md-5">
            <img className={`img-fluid mx-auto ${styles.image}`} src={book.image} alt="Generic placeholder image" />
          </div>
        </div>
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

