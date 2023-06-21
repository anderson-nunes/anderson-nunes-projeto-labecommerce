import React from 'react'
import * as S from './styles'
import { Card } from '../../components/Card'
import { Navbar } from '../../components/Navbar'
import { ProductContext } from '../../hooks/useProductContext'
import { useState, useContext } from 'react'
import { Banner } from '../../components/Banner'
import { SearchValue } from '../../components/Search'
import { Carousel } from '../../components/Carousel'

export const Home = () => {

  const { products, handleName, addProductsCart } = useContext(ProductContext)

  //FILTRANDO POR VALOR USANDO PROPS

  const [valueMin, setValueMin] = useState(0)
  const [valueMax, setValueMax] = useState(0)

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
      />
      <S.HomeContainer>
        {products
          .filter(handleName)
          .filter(handleValue)
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

