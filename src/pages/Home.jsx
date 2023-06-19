import React from 'react'
import Button from '../components/Button'
import Form from '../components/Form'
import Modal from '../components/Modal'
import Text from '../components/Text'

export default function Home() {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('test')
  }
  return (
    <>
        <Button type='link' target='_blank' href="https://www.w3schools.com">test</Button>
        <Button type='button' onClick={()=> console.log('test')}>test</Button>
        <Text size='h1'>test</Text>
        <Text size='j1'>test</Text>
        <Modal>
          <Modal.Title>
            test title
          </Modal.Title>
          <Modal.Body>
            test body
          </Modal.Body>
        </Modal>
        
        
        <Form onSubmit={handleSubmit} action="/submit" method="post">
          <Form.Input type="text" id="username" placeholder="Username"/>
          <Form.Input type="password" id="password" placeholder="Password" disabled/>
          <Form.Checkbox id="remember" label="Remember me"/>
          <Form.Button type="submit">Submit</Form.Button>
        </Form>
    </>
  )
}