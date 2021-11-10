import React from 'react'
import styled, { keyframes } from 'styled-components'

type Props = {
  color?: string,
  width?: string,
  height?: string
}

const Bubble: React.FC<Props> = () => {
  return (
    <Shape />
  )
}


const borderRadiusMorph = keyframes`
  0%   { border-radius: 63% 37% 54% 46% / 55% 48% 52% 45%; } 
  14%  { border-radius: 40% 60% 54% 46% / 49% 60% 40% 51%; } 
  28%  { border-radius: 54% 46% 38% 62% / 49% 70% 30% 51%; } 
  42%  { border-radius: 61% 39% 55% 45% / 61% 38% 62% 39%; } 
  56%  { border-radius: 61% 39% 67% 33% / 70% 50% 50% 30%; } 
  70%  { border-radius: 50% 50% 34% 66% / 56% 68% 32% 44%; } 
  84%  { border-radius: 46% 54% 50% 50% / 35% 61% 39% 65%; } 
  100% { border-radius: 63% 37% 54% 46% / 55% 48% 52% 45%; } 
`

const transformationAndRotation = keyframes`
  0%   { transform: none; }
  50%  { transform: translateY(-10%) rotateY(10deg) scale(1.05) }
  100% { transform: none; }
`

const defaultColor = "#292929"
const defaultWidth = "100vw"
const defaultHeight = "100vh"

const Shape = styled.div`
  position: absolute;
  background: radial-gradient(circle at 80% 30%, ${(props: Props) => props.color || defaultColor}, #000);
  animation: ${borderRadiusMorph} 40s cubic-bezier(1,1.48,.87,.1) infinite both alternate, 
             ${transformationAndRotation} 25s ease-in-out infinite both;
  border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
  transition: all 1s ease-in-out;
  width:  ${(props: Props) => props.width  || defaultWidth };
  height: ${(props: Props) => props.height || defaultHeight};
  bottom: -20%;
  left: -40%;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 20px 80px;

  @media(orientation: portrait) {
    width: calc(100vw * 1.35)
  }
`

export default Bubble
