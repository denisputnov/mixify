import React from 'react'
import styled from 'styled-components'
import { Bubble, Intro, PresentationWindow } from '.'
import { useMousePosition } from '../hooks'
import { Position } from '../types'

const MixifyOpener: React.FC = () =>  {
  const { x, y }: Position = useMousePosition()
  
  return (
    <>
      <MotionContainer x={x} y={y} >
        <Intro />
        <PresentationWindow />
      </MotionContainer>
      <Bubble />
    </>
  )
}

type WrappedFunction = (value: number) => string

const getTranslation = (size: number): WrappedFunction => (value) => {
  return `${(value - size) * -0.003}%` 
}

const getTranslationX = getTranslation(window.innerHeight)
const getTranslationY = getTranslation(window.innerWidth)


const MotionContainer = styled.div`
  --pb: 40px;

  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: min(50px, 5vh);
  padding-bottom: var(--pb);
  min-height: calc(100vh - var(--pb));
  overflow: hidden;
  z-index: 10;
  transform: none;
  
  @media (orientation: landscape) {
    justify-content: space-between;
    flex-direction: row;
    transform: 
      translate(${(props: Position) => getTranslationX(props.x) + ', ' + getTranslationY(props.y)}) 
  }
`

export default MixifyOpener
