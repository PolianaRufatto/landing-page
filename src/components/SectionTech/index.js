import React from 'react'
import Heading from 'components/Heading'

import icons from './content'
import * as S from './styles'
import Container from 'components/Container'

const SectionTech = () => (
  <S.Wrapper>
    <Container>
      <Heading reverseColor>Tecnologias utilizadas</Heading>
      <S.IconsContainer>
        {icons.map(({ name, image, index }) => (
          <S.Icon key={index}>
            <S.Icons src={`img/tech/${image}`} alt={name} />
            <S.IconsName>{name}</S.IconsName>
          </S.Icon>
        ))}
      </S.IconsContainer>
    </Container>
  </S.Wrapper>
)

export default SectionTech
