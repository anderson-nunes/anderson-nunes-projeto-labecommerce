import { useState } from 'react'
import Carousel from 'react-elastic-carousel'
import * as S from './styles'

import banner01 from './assets/banner01.jpg'
import banner02 from './assets/banner02.jpeg'
import banner03 from './assets/banner03.jpg'
import banner04 from './assets/banner04.png'
import banner05 from './assets/banner05.jpg'


export const ContentFrame = () => {

  const [img, setImg] = useState([
    { id: 1, image: banner01 },
    { id: 2, image: banner02 },
    { id: 3, image: banner03 },
    { id: 4, image: banner04 },
    { id: 5, image: banner05 },
  ])

  const breakPoints = [
    { width: 1, itemToShow: 1 },
    { width: 550, itemToShow: 2, itemToScroll: 2 },
    { width: 768, itemToShow: 3 },
    { width: 1200, itemToShow: 4 }
  ]

  return (
    <S.Container>
      <S.CarouselWrapper>
        <Carousel breakPoints={breakPoints}>
          {img.map((item) => (
            <S.Item key={item.id}>
              <img src={item.image} />
            </S.Item>
          ))}
        </Carousel>
      </S.CarouselWrapper>
    </S.Container>
  )
}

