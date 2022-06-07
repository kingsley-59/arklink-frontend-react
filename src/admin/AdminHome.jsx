import React from 'react'

const AdminHome = () => {

  const handleSiteSettings = () => {
    return null;
  }

  return (
    <div className="container w-100">
      <section className="site-settings p-4">
        <div className="site-settings-heading h3 p-4">Manage Site</div>
        <form onSubmit={handleSiteSettings}>

          <div className="group-wrapper rounded shadow-sm p-4 mb-4">
            <div className="fw-bolder">Contact Settings</div>
            <div className="row">
              <div className="col-md-6 col-sm-12 mb-3">
                <label htmlFor="phone-no" className='mb-2'>Tel no.</label>
                <input type="tel" id="phone-no" className="form-control" required/>
              </div>
              <div className="col-md-6 col-sm-12 mb-3">
                <label htmlFor="whatsapp-no" className='mb-2'>Tel no.</label>
                <input type="tel" id="whatsapp-no" className="form-control" required/>
              </div>
              <div className="col-md-6 col-sm-12 mb-3">
                <label htmlFor="email-add" className='mb-2'>Tel no.</label>
                <input type="email" id="email-add" className="form-control" required/>
              </div>
              <div className="col-md-6 col-sm-12 mb-3">
                <label htmlFor="address" className='mb-2'>Tel no.</label>
                <input type="text" id="address" className="form-control" required/>
              </div>
            </div>
          </div>

          <div className="group-wrapper rounded shadow-sm p-4 mb-4">
            <div className="fw-bolder">Site Settings</div>
            <div className="form-group mb-3">
              <label htmlFor="b-heading" className='mb-2'>Banner heading</label>
              <input type="text" id="b-heading" className="form-control" required/>
            </div>
            <div className="form-group mb-3">
              <label htmlFor="b-heading" className='mb-2'>Banner text</label>
              <input type="text" id="b-text" className="form-control" required/>
            </div>
            <div className="form-group mb-3">
              <label htmlFor="b-heading" className='mb-2'>About essay</label>
              <textarea type="text" id="about-essay" className="form-control" rows={4} required></textarea>
            </div>
          </div>
        </form>
      </section>
    </div>
  )
}

export default AdminHome

const sectionWrapper = {
  minHeight: '60vh',
  width: '100%',
  backgroundColor: '#efefff'
}