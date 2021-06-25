import { Modal, Button, Form, Col } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import axios from 'axios';

export default function AddNoteModal({ show, setShow, book }) {
    const handleClose = () => setShow(false);

    const { register, handleSubmit, reset } = useForm();
    
    const onSubmit = async (data) => {
      // Send to back-end for saving to JSON file
      await axios({
        method: 'post',
        url: '/api/notes',
        data: {
          slug: book.slug,
          ...data
        }
      })
      // Push to UI for an update
      book.notes.push({ text: data.text });
      reset();
      handleClose();
    }
  
    return (
      <>
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Add Note</Modal.Title>
          </Modal.Header>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Modal.Body>
                <Form.Group controlId="textarea1">
                  <Form.Label>Note:</Form.Label>
                  <Form.Control as="textarea" rows={2} {...register('text')} required />
                </Form.Group>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button type="submit" value="submit" variant="primary">Save Note</Button>
            </Modal.Footer>
          </Form>
        </Modal>
      </>
    );
}