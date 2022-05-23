import React, { useState } from 'react'
import photo from '../assets/images/black-man-white-shirt.png'

const ContactForm = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const [loading, setLoading] = useState(false)
    const [btnText, setBtnText] = useState('Send message')
    const handleContactForm = (e) => {
        e.preventDefault();
        setLoading(true);
        setBtnText('Message sent');
    }
    return (
        <div className="site-section text-center">
            <div className="form-wrapper m-auto" style={{maxWidth: '400px'}}>
                <div className="form-heading h5 fw-bolder text-primary mb-4">Get In Touch</div>
                <form onSubmit={handleContactForm}>
                    <div className="form-group mb-3">
                        <input type="text" className="form-control" placeholder='tell us your name' required/>
                    </div>
                    <div className="form-group mb-3">
                        <input type="email" name="" id="" className="form-control" placeholder='your email' required/>
                    </div>
                    <div className="form-group mb-3">
                        <textarea value={message} onChange={e => setMessage(e.target.value)} rows="3" className="form-control" placeholder='write your message' required></textarea>
                    </div>
                    <div className="form-group mt-4">
                        <input type="submit" value={btnText} className="btn" />
                    </div>
                </form>
            </div>
        </div>
    )
}


const ContactSection = () => {
  return (
    <div className="container-fluid" style={{backgroundColor: '#eee'}}>
        <div className="row">
            <div className="col-md-6">
                <ContactForm />
            </div>
            <div className="col-md-6 contact-image">
                <div className="image-wrapper w-100 h-100">
                    <img src={photo} alt="" className='w-100 h-100' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default ContactSection