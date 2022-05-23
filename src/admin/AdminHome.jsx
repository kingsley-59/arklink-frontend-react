import React from 'react'

const AdminHome = () => {
  return (
    <section className='bg-secondary' style={sectionWrapper}>
      <div className="container text-center p-3">
        <h2 className="m-auto">This is the admin home page</h2>
      </div>
    </section>
  )
}

export default AdminHome

const sectionWrapper = {
  minHeight: '60vh',
  width: '100%',
  backgroundColor: '#363740'
}