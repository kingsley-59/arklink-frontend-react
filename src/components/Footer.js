import React, {useState} from 'react'


const CompanyDetails = () => {
    return (
        <div className='text-white mb-4'>
            <span>No 225 Ikwerre road, Opp. Mile 3 Bus Stop</span><br/>
            <span>Port Harcourt, Rivers State</span><br/>
            <span>Nigeria.</span>
            <br/><br/>
            <span>Tel: +2348123456789</span><br/>
            <span>Email: arklink@yahoo.com</span><br/>
            <span>Whatsapp: +2348112347977</span><br/>
        </div>
    )
}

const QuickLinks = () => {
    return (
        <div className='text-white mb-4'>
            <span className='text-bold'>Quicklinks:</span><br/>
            <a href="/home" className='text-white'><span>Home</span></a><br/>
            <a href="/about" className='text-white'><span>About</span></a><br/>
            <a href="/products" className='text-white'><span>Products</span></a><br/>
            <a href="/categories" className='text-white'><span>Categories</span></a><br/>
            <a href="/gallery" className='text-white'><span>Gallery</span></a><br/>
            <a href="/contact" className='text-white'><span>Contact</span></a><br/>
        </div>
    )
}

const Subscribe = () => {
    const [subscriberEmail, setSubscriberEmail] = useState('')
    const [loading, setLoading] = useState(false)
    const [btnText, setBtnText] = useState('Subscribe')

    const handleEmailSubscription = (e) => {
        e.preventDefault();
        setLoading(true);
        setBtnText('Success!');
    }
    return (
        <div className='mb-4'>
            <p className='mb-2 text-white'>Subscribe to get updates:</p>
            <form onSubmit={handleEmailSubscription}>
                <div className="form-group mb-2">
                    <input type="email" value={subscriberEmail} onChange={e => setSubscriberEmail(e.target.value)} className="form-control" placeholder='write your email' required/>
                </div>
                <div className="form-group">
                    <input type="submit" value={btnText} className="btn btn-large" disabled={loading} />
                </div>
            </form>
        </div>
    )
}

const Footer = () => {
  return (
    <div className='site-section p-5 bg-primary'>
        <div className="text-white mb-4">
            <span className="lh-1"><span className='h1 fb-bold font-comfortaa'>Arklink</span><br/><small>Dealers on all kinds of building materials.</small></span>
        </div>
        <div className="row">
            <div className="col-lg-4 col-sm-12">
                <CompanyDetails />
            </div>
            <div className="col-lg-4 col-sm-12">
                <QuickLinks />
            </div>
            <div className="col-lg-4 col-sm-5 col-xs-12">
                <Subscribe />
            </div>
        </div>
        <hr />
        <div className="text-center" style={{height: 'fit-content'}}>
            <small className="text-secondary">Copyright &copy; 2022 | All rights reserved | <a href='/login' className='text-white'>Admin Login</a> </small>
        </div>
    </div>
  )
}

export default Footer