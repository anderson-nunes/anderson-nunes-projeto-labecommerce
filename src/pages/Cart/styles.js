import styled from 'styled-components';

export const CartContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: start;
  align-items: center;
  margin: 12rem 0;
  position: absolute;
  
  p{
  margin: 0.75rem;
  font-size: 18px;
  }
`

export const CartFigure = styled.div`
   
    width: 1100px;
    display: flex;
    position: relative;
    box-shadow: 0 2px 7px #dfdfdf;
    background: #fafafa;
    margin: 2rem 8rem;

  img {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 200px;
    height: 250px;
    padding: 20px;
    background: #f0f0f0;
    object-fit: contain;
    max-width: none;
  }
`;

export const CartText = styled.div`
    /* width: 100%; */
    display: grid;
    grid-template-columns: repeat(5, 180px);
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-left: 1rem;

    button{
    color: rgb(183, 183, 183);
    border: 0px;
    background-color: rgb(0, 0, 0);
    width: 25px;
    height: 25px;
    margin-left: 1rem;
    font-size: 16px;
    }
`

export const ContainerQuantitie = styled.div`
  width: 100%;
  margin-left: 2rem;
`

export const ContainerBtn = styled.div`  
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 20%;
    gap: 1rem;

    svg {
    position: absolute;
    font-size: 26px;
    cursor: pointer;
    right: 6px;
    top: 8px;
    }
`

export const BtnAdded = styled.div`
  width: 100%;
  padding: 10px;
  background-color: #43B02A;
  text-align: center;
  color: #fff;
  border: none;
  outline: 0;
  cursor: pointer;
  font-size: 18px;
  font-weight: 500;
  border-radius: 15px;
  margin-top: 2rem;
`

export const ContainerCheckout = styled.div`
  
  display: flex;
  align-items: start;
  justify-content: space-between;
  flex-direction: column;
  position: relative;
  box-shadow: 0 2px 7px #dfdfdf;
  background: #fafafa;
  width: 550px;
  height: 750px;
  padding: 2rem;
  position: absolute;
  right: 80px;
  top: 30px;

  input {
  margin: 1rem;
  padding: 10px;
  border: 10px;
  }

  h1 {
  margin-bottom: 1rem;
  }
`

export const ContainerCredit = styled.div`
  
  display: flex;
  justify-content: center;
  align-items: center;

  input {
  width: 80px;
  }
`

export const Total = styled.div`
  font-size: 20px;
  margin-top: 2rem;
`