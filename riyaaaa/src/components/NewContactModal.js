import React, { useRef } from 'react'
import { Modal, Form, Button } from 'react-bootstrap'
import { useContacts } from '../contexts/ContactsProvider'

export default function NewContactModal({ closeModal }) {
  const idRef = useRef()
  const nameRef = useRef()
  const { createContact } = useContacts()

  function handleSubmit(e) {
    e.preventDefault()

    createContact(idRef.current.value, nameRef.current.value)
    closeModal()
  }

  return (
    <>
      <Modal.Header closeButton><b>Create Contact</b></Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label><b>Id</b></Form.Label>
            <Form.Control type="text" ref={idRef} required />
          </Form.Group>
          <Form.Group>
            <Form.Label><b>Name</b></Form.Label>
            <Form.Control type="text" ref={nameRef} required />
          </Form.Group>
          <Button type="submit"><b>Create</b></Button>
        </Form>
      </Modal.Body>
    </>
  )
}
