import React from 'react'
import * as S from './styles'
import { Card } from '../../components/Card'
import { Navbar } from '../../components/Navbar'
import { ProductContext } from '../../hooks/useProductContext'
import { useState, useContext } from 'react'
import { Banner } from '../../components/Banner'
import { SearchValue } from '../../components/Search'
import { Carousel } from '../../components/Carousel'
import { Footer } from '../../components/Footer'

export const Home = () => {

  const { products, handleName, addProductsCart } = useContext(ProductContext)

  // FILTRANDO POR VALOR USANDO PROPS
  const [valueMin, setValueMin] = useState(0)
  const [valueMax, setValueMax] = useState(0)

  //FILTRANDO POR ORDEM CRESCENTE E DECRESCENTE
  const [order, setOrder] = useState('')

  const handleValue = (item) => {

    if (!valueMin && !valueMax) {
      return products
    }
    return item.price >= valueMin && item.price <= valueMax
  }

  return (
    <>
      <Navbar />
      <Banner />
      <Carousel />
      <SearchValue
        handleValue={handleValue}
        valueMin={valueMin}
        valueMax={valueMax}
        setValueMin={setValueMin}
        setValueMax={setValueMax}
        order={order}
        setOrder={setOrder}
      />
      <S.HomeContainer>
        {products
          .filter(handleName)
          .filter(handleValue)
          .sort((a, b) => {
            if (order === 'Crescente') {
              if (a.price > b.price) {
                return 1
              }
              if (a.price < b.price) {
                return -1
              }
              return 0
            } else if (order === 'Decrescente') {
              if (a.price > b.price) {
                return -1
              }
              if (a.price < b.price) {
                return 1
              }
              return 0
            }
          })
          .map((product, index) => (
            <Card
              key={index}
              item={product}
              addItem={addProductsCart} />
          ))}
      </S.HomeContainer>
      <Footer />
    </>
  )
}

