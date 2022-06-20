import React, { useState } from 'react'
import ImageKit from 'imagekit-javascript';
import axios from 'axios';
import { useEffect } from 'react';

window.Buffer = window.Buffer || require("buffer").Buffer;

const API_URL = process.env.REACT_APP_API_URL;

const imageKit = new ImageKit({
    publicKey: 'public_DgRh+fRF2Y8QPPIyq9+E3ew6nlo=' ,
    urlEndpoint: 'https://ik.imagekit.io/kivel59' ,
    authenticationEndpoint: `${API_URL}/api/image-kit-auth/`
})

const Preview = ({payload}) => {
  return (
    <div className="row border w-100" style={{maxHeight: '300px'}}>
      <div className="col-4">
        <img src={payload.photo_url} alt={payload.name} width='100%' height='100%' />
      </div>
      <div className="col-8">
        <div className="file-name p-3">{payload.name}</div>
        <div className="file-description p-3">{payload.description}</div>
      </div>
    </div>
  )
}

const Products = () => {
  const Categories = ['tiles', 'marble', 'WC toilets', 'mirror', 'jacuzzi', 'standing shower', 'bathtubs']
  const [productList, setProductList] = useState([])

  const [name, setName] = useState('')
  const [description, setDescription] = useState('No description')
  const [category, setCategory] = useState()
  const [file, setFile] = useState()
  const [photo_url, setPhotoUrl] = useState('')

  const [formError, setFormError] = useState('')
  const [successMsg, setSuccessMsg] = useState('')

  const [payload, setPayload] = useState({})
  const [isUploaded, setIsUploaded] = useState(false)

  useEffect(() => {
    let url = API_URL + '/api/products'
    axios.get(url)
    .then(response => {
      let _data = response.data
      if (_data.length !== 0) {
        setProductList(_data);
      } else {
        console.log(_data)
        return;
      }
    })
    .catch(error => console.error(error))
  }, [])

  const handleProductForm = (e) => {
    e.preventDefault();

    // exit function if required fields is empty
    if (!name || !category || !file) {
      console.error('Fill all required fields')
      return;
    }

    // set params for imageKit upload function and upload
    let params = {
      file: file,
      fileName: name
    }
    imageKit.upload(params, (err, response) => {
      if (err) {
        console.error(err)
        return;
      }
      console.log(response?.url)
      setPhotoUrl(response?.url)

      // send product details to api server
      submitProductToApi()
    })
  }

  const submitProductToApi = () => {
    let url = API_URL + '/api/products'
    let data = {
      name, category, description, photo_url
    }
    if (photo_url) {
      setPayload(data)
      axios.post(url, data)
      .then(response => {
        console.log(response.data)
        setIsUploaded(true)
      })
      .catch(error => console.error(error))
    } else {
      alert("Something went wrong with file upload. Please try again.")
      return;
    }
    
  }

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
          <form onSubmit={handleProductForm}>
            <div className="form-group mb-3">
              <label htmlFor="b-heading" className='mb-2'>Product Name</label>
              <input type="text" value={name} onChange={e => setName(e.target.value)} id="b-heading" className="form-control" required/>
            </div>
            <div className="form-group mb-3">
              <label htmlFor="b-heading" className='mb-2'>Descrition <small>(optional)</small></label>
              <input type="text" value={description} onChange={e => setDescription(e.target.value)} id="b-heading" className="form-control"/>
            </div>
            <div className="form-group mb-3">
              <label htmlFor="p-category" className='mb-2'>Select Category</label>
              <select value={category} onChange={e => setCategory(e.target.value)}  id="p-category" className='form-control' required>
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
              <input type="file" onChange={e => setFile(e.target.files[0])} id="p-photo" className="form-control" required/>
            </div>
            <div className="form-group mb-3 text-center">
              <input type="submit" value="Save" className="btn-success px-4 py-2 border-0 rounded" />
            </div>

            {isUploaded && <Preview payload={payload} />}
          </form>
        </div>

        <div className="group-wrapper rounded shadow-sm p-4 mb-4">
          <div className="fw-bolder">All products</div>
          <hr />
          <div className="row m-0 text-center">
            {
              (productList.length === 0) ? <span className="h4">No photos yet!</span> 
              : productList?.map((item, idx) => {
                return <div className='container rounded p-3 shadow-sm mb-2' key={idx}>{idx + '. ' + item?.name}</div>
              })
            }
          </div>
        </div>

      </section>
    </div>
  )
}

export default Products