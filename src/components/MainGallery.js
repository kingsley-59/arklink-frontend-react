import React, {useState} from 'react'

const Images = [
    '//placekitten.com/300/200',
    '//placekitten.com/g/300/200',
    '//placekitten.com/300/200',
    '//placekitten.com/g/300/200',
    '//placekitten.com/300/200',
    '//placekitten.com/g/300/200',
    '//placekitten.com/300/200',
    '//placekitten.com/g/300/200',
    '//placekitten.com/300/200'
]

const MainGallery = () => {
    const [photoIndex, setPhotoIndex] = useState(0)
    const [isOpen, setIsOpen] = useState(false)

    const handleImageClick = (idx) => {
        setIsOpen(true);
        setPhotoIndex(idx)
    }
    
    return (
    <div className='my-3 p-5'>
      <h1 className='text-middle mt-4'>Photos</h1>
      <div className='row'>
          <div className='col-md-4 col-sm-6'>
              <img src={Images[0]} onClick={(e) => handleImageClick(0)} />
              <img src={Images[3]} onClick={(e) => handleImageClick(3)} />
              <img src={Images[6]} onClick={(e) => handleImageClick(6)} />
          </div>
          <div className='col-md-4 col-sm-6'>
              <img src={Images[1]} onClick={(e) => handleImageClick(1) } />
              <img src={Images[4]} onClick={(e) => handleImageClick(4)} />
              <img src={Images[7]} onClick={(e) => handleImageClick(7)} />
          </div>
          <div className='col-md-4 col-sm-6'>
              <img src={Images[2]} onClick={(e) => handleImageClick(2)} />
              <img src={Images[5]} onClick={(e) => handleImageClick(5)} />
              <img src={Images[8]} onClick={(e) => handleImageClick(8)} />
          </div>
      </div>
      
     {/* {isOpen && (
      <Lightbox
        images={Images}
        mainSrc={Images[photoIndex]}
        nextSrc={Images[(photoIndex + 1) % Images.length]}
        prevSrc={Images[(photoIndex + Images.length - 1) % Images.length]}
        onCloseRequest={() => setIsOpen(false)}
        onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + Images.length - 1) % Images.length)
        }
        onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % Images.length)
        }
      />
    )} */}
    </div>
    );
}

export default MainGallery