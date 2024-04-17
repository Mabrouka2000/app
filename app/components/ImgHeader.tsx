import React from 'react'
import Image from 'next/image'
import img11 from '../../public/image/img11.jpg'

function ImgHeader() {
  return (
    <div>
       
     <Image 
       src={img11}
       style={{
        width: '100%',
        height: '200px',
      }}
       className="hidden md:block"
         alt="pizza"/> 
     
    </div>
  )
}

export default ImgHeader
