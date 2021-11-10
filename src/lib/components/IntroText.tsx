import React from 'react'
import styled, { keyframes } from 'styled-components'
import { useMousePosition } from '../hooks'
import { Position } from '../types'

type WrappedFunction = (value: number) => string

const getTranslation = (size: number): WrappedFunction => (value) => {
  return `${(value - size) * -0.003}%` 
}

const getTranslationX = getTranslation(window.innerHeight)
const getTranslationY = getTranslation(window.innerWidth)

const moveFromRight = keyframes`
  0%   { transform: translateX(80vw); opacity: 0 }
  100% { transform: none;             opacity: 1 }
`

const fadeIn = keyframes`
  0%   { opacity: 0 }  
  100% { opacity: 1 }
`

const MotionContainer = styled.div`
  position: relative;
  z-index: 10;
  min-height: 100vh;
  @media (orientation: landscape) {
    transform: 
      translate(${(props: Position) => getTranslationX(props.x) + ', ' + getTranslationY(props.y)}) 
      rotate3d(0.2, 0.1, -0.05, 10deg);
  }
  transform: rotate3d(0.2, 0.1, -0.05, 10deg);
`

const TextBlock = styled.div`
  position: absolute;
  top: min(100px, 20vh);
  left: max(30px, 5vw);
`

const Title = styled.h1`
  margin: 0;
  color: white;
  font-size: calc(90px + 100 * ((100vw - 320px) / (1280 - 320)));
  animation: ${moveFromRight} 500ms cubic-bezier(0,.85,.42,1) both alternate 300ms;
  z-index: 10;
`

const SubTitle = styled.p`
  margin: 0;
  margin-left: max(0.3vw, 3px);
  margin-top: max(-20px, -4vh);
  color: #c0c0c0;
  font-size: calc(22px + 30 * ((100vw - 320px) / (1280 - 320)));
  animation: ${fadeIn} 1200ms ease-out both alternate 800ms;
`

const IntroText: React.FC = () => {
  const { x, y } = useMousePosition()

  return (
    <MotionContainer x={x} y={y} >
      <TextBlock>
        <Title children={'mixify'} />
        <SubTitle children={'keep all in one'}/>
      </TextBlock>
    </MotionContainer>
  )
}

export default IntroText
