import React, { ReactNode } from 'react'
import styled from 'styled-components'

type Display = 'block' | 'flex'
type Props = { children: ReactNode, display?: Display }

const Container: React.FC<Props> = ({ children }) => {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  display: ${(props: Props) => props.display ?? 'block'};
  align-items: center;
  justify-content: center;
  width: 100%;
  height: auto;
  min-height: 100vh;
  background: radial-gradient(circle at 70% 40%, #222222, black);
  overflow: hidden;
`


export default Container