import React from 'react'
import * as S from './styles'

export const SearchValue = ({ handleValue, valueMin, valueMax, setValueMin, setValueMax }) => {

  return (

    <S.FilterValue>
      <p>Mínimo:</p>
      <input
        type="number"
        value={valueMin}
        onChange={(e) => setValueMin(e.target.value)}
      />

      <p>Máximo:</p>
      <input
        type="number"
        value={valueMax}
        onChange={(e) => setValueMax(e.target.value)}
      />
    </S.FilterValue>
  )
}
