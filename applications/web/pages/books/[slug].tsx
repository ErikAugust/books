import Head from 'next/head'
import { useState } from 'react';
import { Books } from '@eaj/books';
import { Tabs, Tab, Alert, Button } from 'react-bootstrap';
import { format } from 'date-fns';
import Linkify from 'react-linkify';

import styles from '../../styles/Book.module.css';
import Layout from '../../components/layout'
import AddQuoteModal from '../../components/add-quote-modal';
import AddNoteModal from '../../components/add-note-modal';


export default function Book({ book, list }) {
  const [showQuoteModal, setShowQuoteModal] = useState(false);
  const [showNoteModal, setShowNoteModal] = useState(false);

  const handleShowQuoteModal = () => setShowQuoteModal(true);
  const handleShowNoteModal = () => setShowNoteModal(true);


  function formatDate(date) {
    return format(new Date(date), 'MMMM d, yyyy');
  }
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
            <Tabs defaultActiveKey="description" id="tab">
              <Tab eventKey="description" title="Description">
              <p className={`${styles.description} lead`}>{book.description}</p>
              </Tab>
              <Tab eventKey="quotes" title={`Quotes (${book.quotes?.length})`}>
                <div>
                  <ul>
                  {book.quotes?.map((value, index) => {
                    return <li className={styles.quotes} key={index}>
                      "{value.text}" ({value.page})
                    </li>
                  })}
                </ul>
                </div>
              </Tab>
              <Tab eventKey="notes" title={`Notes (${book.notes?.length})`}>
                <div>
                  <ul>
                  {book.notes?.map((value, index) => {
                    return <li className={styles.quotes} key={index}>
                      <Linkify>{value.text}</Linkify>
                    </li>
                  })}
                </ul>
                </div>
              </Tab>
            </Tabs>
          </div>
          <div className="col-md-5">
            { book.completed && <Alert variant="success">
                Completed on { formatDate(book.completedAt) }
              </Alert> }
            <img className={`img-fluid mx-auto ${styles.image}`} src={book.image} alt="Placeholder image" />
            <div className={styles.actions}>
              <Button variant="outline-secondary" size="sm" onClick={handleShowQuoteModal}>
                Add Quote
              </Button>
              <Button 
                style={{ 'marginLeft': '12px'}} 
                variant="outline-secondary" 
                size="sm" 
                onClick={handleShowNoteModal}>
                Add Note
              </Button>
              <AddQuoteModal 
                book={book} 
                show={showQuoteModal} 
                setShow={setShowQuoteModal} 
              />
              <AddNoteModal 
                book={book} 
                show={showNoteModal} 
                setShow={setShowNoteModal} 
              />
            </div>
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

