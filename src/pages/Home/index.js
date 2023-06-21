import React from 'react'
import * as S from './styles'
import { Card } from '../../components/Card'
import { Navbar } from '../../components/Navbar'
import { ProductContext } from '../../hooks/useProductContext'
import { useContext } from 'react'
import { Banner } from '../../components/Banner'
import { Carousel } from '../../components/Carousel'

export const Home = () => {

  const { products, handleName, addProductsCart } = useContext(ProductContext)

  return (
    <>
      <Navbar />
      <Banner />
      <Carousel />
      <S.HomeContainer>
        {products
          .filter(handleName)
          .map((product, index) => (
            <Card
              key={index}
              item={product}
              addItem={addProductsCart} />
          ))}
      </S.HomeContainer>
    </>
  )
}

