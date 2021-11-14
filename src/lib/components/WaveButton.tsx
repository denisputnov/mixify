import React from 'react'
import styled, { keyframes } from 'styled-components'

type Props = {
  text: string,
  width?: string,
  height?: string,
  animation?: Animations,
  duration?: number,
  delay?: number
}

type Animations = 'fadeIn' | 'moveFromRight' | 'moveFromBottom' | 'moveFromLeft' | 'moveFromTop'

const WaveButton: React.FC<Props> = (props) => {
  return (
    <Button {...props} >
      <Text>{props.text}</Text>
      <Wave />
    </Button>
  )
}

const getTranslate = (animation: Animations | undefined): string => {
  console.log(animation)
  if (animation === 'moveFromRight')  return 'translateX(100vw)'
  if (animation === 'moveFromLeft')   return 'translateX(-100vw)'
  if (animation === 'moveFromTop')    return 'translateY(-100vh)'
  if (animation === 'moveFromBottom') return 'translateY(100vh)'
  return 'none'
}

const entryAnimation = (animation: Animations | undefined) => keyframes`
  0% {
    transform: ${getTranslate(animation)};
    opacity: 0
  }
  100% {
    transform: none;
    opacity: 1
  }
`

const defaultWidth = "max(10vw, 160px)"
const defaultDuration = 1000
const defaultDelay = 0

const Button = styled.button`
  ${(props: Props) => console.log(props)}
  min-width: ${(props: Props) => props.width ?? defaultWidth};
  min-height: calc(${(props: Props) => props.width ?? defaultWidth} / 2.4);
  padding: calc(${(props: Props) => props.width || defaultWidth} * 0.08) calc(${(props: Props) => props.width || defaultWidth} * 0.15);
  position: relative;
  display: block;
  overflow: hidden;
  border: none;
  background-color: transparent;
  font-family: inherit;
  animation: 
    ${(props: Props) => entryAnimation(props.animation)} 
    ${(props: Props) => props.duration ?? defaultDuration}ms
    cubic-bezier(0,.85,.42,1) both alternate
    ${(props: Props) => props.delay ?? defaultDelay}ms;

  &:hover {
    div {
      top: calc(${(props: Props) => props.width ?? defaultWidth} * -1);
    }
  }
`

const Text = styled.span`
  position: relative;
  z-index: 1;
  color: #000000;
  font-size: calc(${(props: Props) => props.width ?? defaultWidth} * 0.15);
`

const waveKeyframes = keyframes`
  0% {
    transform: translate(-50%,-75%) rotate(0deg);
  }
  100% {
    transform: translate(-50%,-75%) rotate(360deg);
  }
`

const Wave = styled.div`
  width: 100%;
  background-color: #FFFFFF;
  /* box-shadow: inset 0 0 50px rgba(0,0,0,.5); */
  position: absolute;
  left: 0;
  top: -80%;
  bottom: -100%;
  transition: 0.4s;

  &::before, &::after {
    width: 200%;
    height: 200%;
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%,-75%);
  }

  &::before {
    border-radius: 45%;
    background-color: #F1F0F0CC;
    animation: ${waveKeyframes} 5s linear infinite;
  }

  &::after {
    border-radius: 40%;
    background-color: #CCCCCC7F;
    animation: ${waveKeyframes} 10s linear infinite;
  }
`

export default WaveButton
