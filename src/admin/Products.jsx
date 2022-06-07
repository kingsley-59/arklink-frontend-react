import React from 'react'

const Products = () => {
  const Categories = ['tiles', 'doors', 'toilets', 'marble', 'kitchenware', 'bathtubs']
  const ProductList = []

  return (
    <div className='container w-100'>
      <section className="p-4">
        <div className="products-heading h3 p-4">Manage Products</div>
        
        <div className="group-wrapper rounded shadow-sm p-4 mb-4">
          <div className="fw-bolder">Category Settings</div>
          <hr />
          <div className="row">
            {
              Categories.map((item, idx) => {
                return <div key={idx} className='p-3 shadow-sm'>
                  <span style={{float: 'left'}}>{item}</span>
                  <span className='fw-bolder text-danger' style={{float: 'right', cursor: 'pointer'}}>&#215;</span>
                </div>
              })
            }
            <div className="row w-100 m-0">
              <div className='p-3 text-center'>
                <button className='btn'>Add Category <span className='fw-bolder'>&#43;</span></button>
              </div>
            </div>
          </div>
        </div>

        <div className="group-wrapper rounded shadow-sm p-4 mb-4">
          <div className="fw-bolder">Add Product</div>
          <hr />
          <form onSubmit={e => e.preventDefault()}>
            <div className="form-group mb-3">
              <label htmlFor="b-heading" className='mb-2'>Product Name</label>
              <input type="text" id="b-heading" className="form-control" required/>
            </div>
            <div className="form-group mb-3">
              <label htmlFor="p-category" className='mb-2'>Select Category</label>
              <select  id="p-category" className='form-control' required>
                <option value="">--select category--</option>
                {
                  Categories.map((item, idx) => {
                    return <option value={item} key={idx}>{item.toUpperCase()}</option>
                  })
                }
              </select>
            </div>
            <div className="form-group mb-3">
              <label htmlFor="p-photo" className='mb-2'>Upload Photo</label>
              <input type="file" id="p-photo" className="form-control" required/>
            </div>
            <div className="form-group mb-3 text-center">
              <input type="submit" value="Save" className="btn-success px-4 py-2 border-0 rounded" />
            </div>
          </form>
        </div>

        <div className="group-wrapper rounded shadow-sm p-4 mb-4">
          <div className="fw-bolder">All products</div>
          <hr />
          <div className="row m-0 text-center">
            {
              (ProductList.length === 0) ? <span className="h4">No photos yet!</span> 
              : ProductList?.map((item, idx) => {
                return <div key={idx}>{item?.name}</div>
              })
            }
          </div>
        </div>

      </section>
    </div>
  )
}

export default Products