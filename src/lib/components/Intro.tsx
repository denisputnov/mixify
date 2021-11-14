import React from 'react'
import styled, { keyframes } from 'styled-components'
import { WaveButton } from '.'

const Intro: React.FC = () => {
  const subtitle: string[] = 'mix all in one'.split('')

  return (
    <Wrapper>
      <Title children={'mixify'}/>
      <SubTitleWrapper>
        {subtitle.map((char: string, index: number) => <SubTitleChar children={char} index={index}/>) }
      </SubTitleWrapper>
      <ButtonWrapper>
        <WaveButton text="Create now" animation='fadeIn' duration={2000}/>
      </ButtonWrapper>
    </Wrapper>
  )
}

const moveFromRight = keyframes`
  0%   { transform: translateX(80vw); opacity: 0 }
  100% { transform: none;             opacity: 1 }
`

const fadeIn = keyframes`
  0%   { opacity: 0 }  
  100% { opacity: 1 }
`

const Wrapper = styled.div`
  --mt: min(100px, 20vh);

  margin-top: var(--mt);
  margin-left: max(30px, 5vw);
  transform: rotate3d(0.2, 0.1, -0.05, 10deg);
  height: max-content;

  @media (orientation: portrait) {
    width: min(90vw, 500px);
    margin: var(--mt) auto 0;
    transform: none;
  }
`

const ButtonWrapper = styled.div`
  margin-top: 10vh;
  /* transform: rotate3d(-0.2, -0.1, 0.05, 10deg); */
  width: max-content;
  @media (orientation: portrait) {
    /* width: min(90vw, 500px); */
    margin: max(40px, 5vh) auto 0;
  }
`

const Title = styled.h1`
  margin: 0;
  color: white;
  font-size: calc(90px + 100 * ((100vw - 320px) / (1280 - 320)));
  animation: ${moveFromRight} 500ms cubic-bezier(0,.85,.42,1) both alternate 300ms;
  z-index: 10;
`

const SubTitleWrapper = styled.p`
  margin: 0;
  margin-left: max(0.3vw, 3px);
  margin-top: max(-20px, -4vh);
  color: #c0c0c0;
  font-size: calc(22px + 30 * ((100vw - 320px) / (1280 - 320)));
`

const SubTitleChar = styled.span`
  animation: ${fadeIn} 1200ms ease-out both alternate ${(props: { index: number }) => 700 + 20 * props.index }ms;
`

export default Intro
