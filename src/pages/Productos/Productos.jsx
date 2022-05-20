import React from 'react'
import Helmet from 'react-helmet'
import Building from '../../components/Building/Building'

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
      <Building />
    </div>
  )
}

export default Productos