import { styled } from "styled-components";

export const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 360px;
  color:#fff;
  font-size: 4em;
  position: relative;

  img {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    object-fit: cover;
}
`

export const Container = styled.div`
  
  font-family: sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const CarouselWrapper = styled.div`
  width: 77%;

`

