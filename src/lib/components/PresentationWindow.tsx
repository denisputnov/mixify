import React from 'react'
import styled, { keyframes } from 'styled-components'

const PresentationWindow: React.FC = () => {
  return (
    <PresentationContainer>
      <Test />
    </PresentationContainer>
  )
}

const moveContainerFromBottom = keyframes`
  0% {
    opacity: 0;
    transform: translateY(100vh);
  }
  100% {
    opacity: 1;
    transform: none;
  }
`

const moveContainerFromRight = keyframes`
  0% {
    transform: translateX(200vw);
    opacity: 0;
  }
  100% {
    opacity: 1;
    transform: none;
  }
`

const Test = styled.div`
  width: 100%;
  height: 100%;
  background-color: #ffffff44;
  border-radius: max(1.5vw, 20px);
`

const PresentationContainer = styled.div`
  --size: 50vmin;
  --mb: 20px;

  margin: min(12.5vh, 200px) 5vw 0 0;
  padding: max(10px, 1vw);
  width: var(--size);
  height: calc(var(--size) / 3 * 4);
  background-color: #1d1d1d;
  border-radius: max(2vw, 30px);
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 100px;
  animation: ${moveContainerFromBottom} 800ms cubic-bezier(0,.85,.42,1) both alternate 600ms;   
  box-sizing: border-box;
  margin-bottom: var(--mb);
  z-index: -1;
  
  @media (orientation: portrait) {
    --size: min(90vw, 500px);
    animation: ${moveContainerFromRight} 800ms cubic-bezier(0,.85,.42,1) both alternate 500ms;
    margin: 0 auto;
  }
`

export default PresentationWindow