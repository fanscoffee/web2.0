import React from 'react'
import Helmet from 'react-helmet'
import CardCarousel from '../../components/CardCarousel/CardCarousel'

function Productos() {
  return (
    <div>
      <Helmet>
        <title>Productos - Fans Coffee & Bakery</title>
        <meta name="title" content="Productos - Fans Coffee & Bakery" />
        <meta
          name="description"
          content="Disfruta de nuestra gran variedad de productos."
        />
      </Helmet>
      <CardCarousel/>
    </div>
  )
}

export default Productos