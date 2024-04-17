"use client"
import React from 'react'
import CardProduit from './CardProduit'
import MenuCategorie from '../Boutique/MenuCategorie'


import "bootstrap/dist/css/bootstrap.min.css";


import Hero2 from '@/app/components/Hero2/Hero2';

function ListProduit() {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <div>

      <Hero2 />
      <MenuCategorie />
      <CardProduit />



    </div>
  )
}

export default ListProduit
