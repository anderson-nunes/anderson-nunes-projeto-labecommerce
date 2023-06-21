import styled from 'styled-components';

export const FilterValue = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 1rem;
  padding: 0 17rem;

  p{
  color: black;
  font-size: 1rem;
  }

  input {
  width: 100px;
  padding: 6px;
  border-radius: 10px;
  outline: 0;
  border: none;
  margin-right: 3px;
  background-color: #fafafa;
  }
`