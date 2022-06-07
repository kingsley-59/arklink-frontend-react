import React, {useState} from 'react'
import { Modal } from 'react-bootstrap';

const QuoteMessages = [
  {
    name: 'Random Company Inc.', 
    email: 'manage@randomcompany.com', 
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe perferendis illo eius eos nemo, distinctio dolore eaque vel iure nam, voluptate corporis. Ipsa, iste error?'
  },
  {
    name: 'Random Company Inc.', 
    email: 'manage@randomcompany.com', 
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe perferendis illo eius eos nemo, distinctio dolore eaque vel iure nam, voluptate corporis. Ipsa, iste error?'
  },
  {
    name: 'Random Company Inc.', 
    email: 'manage@randomcompany.com', 
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe perferendis illo eius eos nemo, distinctio dolore eaque vel iure nam, voluptate corporis. Ipsa, iste error?'
  },
  {
    name: 'Random Company Inc.', 
    email: 'manage@randomcompany.com', 
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe perferendis illo eius eos nemo, distinctio dolore eaque vel iure nam, voluptate corporis. Ipsa, iste error?'
  },
  {
    name: 'Random Company Inc.', 
    email: 'manage@randomcompany.com', 
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe perferendis illo eius eos nemo, distinctio dolore eaque vel iure nam, voluptate corporis. Ipsa, iste error?'
  },
]

const ContactMessages = [
  {
    name: 'Steven Matt', 
    email: 'stevenmatt@gmail.com', 
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe perferendis illo eius eos nemo, distinctio dolore eaque vel iure nam, voluptate corporis. Ipsa, iste error?'
  },
  {
    name: 'Steven Matt', 
    email: 'stevenmatt@gmail.com', 
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe perferendis illo eius eos nemo, distinctio dolore eaque vel iure nam, voluptate corporis. Ipsa, iste error?'
  },
  {
    name: 'Steven Matt', 
    email: 'stevenmatt@gmail.com', 
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe perferendis illo eius eos nemo, distinctio dolore eaque vel iure nam, voluptate corporis. Ipsa, iste error?'
  },
  {
    name: 'Steven Matt', 
    email: 'stevenmatt@gmail.com', 
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe perferendis illo eius eos nemo, distinctio dolore eaque vel iure nam, voluptate corporis. Ipsa, iste error?'
  },
  {
    name: 'Steven Matt', 
    email: 'stevenmatt@gmail.com', 
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe perferendis illo eius eos nemo, distinctio dolore eaque vel iure nam, voluptate corporis. Ipsa, iste error?'
  },
]

const MessageDisplayModal = ({message, show, handleShow}) => {

  const handleClose = () => handleShow(false);

  return (
      <Modal show={show} onHide={handleClose} centered>
          <Modal.Header closeButton>
            <span className='h5'>Quote</span>
          </Modal.Header>
          <Modal.Body>
              <div>
                <span className='fw-bolder'>{message?.name}<br /><small>{message?.email}</small></span><br />
                <small>{message?.phone ? message?.phone : '[No phone no.]'}</small><br /><br />
                <p>{message?.text}</p>
              </div>
          </Modal.Body>
          <Modal.Footer>
              <button onClick={handleClose}></button>
          </Modal.Footer>
      </Modal>
  )
}

const Messages = () => {
  const [currentMsg, setCurrentMsg] = useState({})
  const [show, setShow] = useState(false)
  
  const MessageCard = ({message, handleCurrentMsg, handleShow}) => {
    const showMessage = () => {
      handleCurrentMsg(message)
      handleShow(true)
    }

    return (
      <div className="message-card rounded shadow-sm p-3 mb-3" onClick={showMessage}>
        <div className="fw-bolder">{message?.name} <br /><small>{message?.email}</small></div>
        <div className="text-secondary">
          {message?.text}
        </div>
      </div>
    )
  }

  return (
    <div className='container w-100'>
      <section className="site-settings p-4">
        <div className="site-settings-heading h3 p-4">Site Messages</div>
        
          <div className="group-wrapper rounded shadow-sm p-4 mb-4">
            <div className="fw-bolder h4">Quotes</div>
            <hr />
            {
              QuoteMessages.map((message, idx) => {
                return <MessageCard message={message} handleCurrentMsg={setCurrentMsg} handleShow={setShow} key={idx} />
              })
            }
          </div>

          <div className="group-wrapper rounded shadow-sm p-4 mb-4">
            <div className="fw-bolder h4">Conatct Messages</div>
            <hr />
            {
              ContactMessages.map((message, idx) => {
                return <MessageCard message={message} handleCurrentMsg={setCurrentMsg} handleShow={setShow} key={idx} />
              })
            }
          </div>
          
          <MessageDisplayModal message={currentMsg} show={show} handleShow={setShow} />
      </section>
    </div>
  )
}

export default Messages