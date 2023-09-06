import styled, {css} from "styled-components";
import SpanTip from "../Tip/Tip";

interface ContainerProps{
  focused: string;
  filled: string;
  errored: string;
}


export const Container = styled.div`
  width: 260px;
`

export const Search = styled.div`
  display: flex;
  align-items: center;
  width: 300px;
  height: 60px;
  border-radius: 5px;
  gap: 5px;
  padding: 0 15px;
  margin-bottom: -16px;
  input{
    border: 0;
    outline: 0;
    background: none;
    font-size: 1.2rem;
    width: 55%;
    
  }  
`

export const FindIcon = styled.div<ContainerProps>`
  svg{
    ${props => props.focused === 'true' && css`
      color: green;
    `}

    ${props => props.filled === 'true' && css`
      color: orange;
    `}

    ${props => props.errored === 'true' && css`
      color: red;
    `}

    font-size: 20px;
  }
`

export const CleanIcon = styled.div<ContainerProps>`
  cursor: pointer;
  svg{
    ${props => props.focused === 'true' && css`
      color: green;
    `}

    ${props => props.filled === 'true' && css`
      color: orange;
    `}

    ${props => props.errored === 'true' && css`
      color: red;
    `}
    font-size: 20px;
  }
`

export const ErrorIcon = styled.div<ContainerProps>`
  svg{
    ${props => props.focused === 'true' && css`
      color: green;
    `}

    ${props => props.filled === 'true' && css`
      color: orange;
    `}

    ${props => props.errored === 'true' && css`
      color: red;
    `}
    font-size: 20px;
  }
`

export const Divider = styled.div<ContainerProps>`
  width: 100%;
  height: 2px;
  background-color: black;
  ${props => props.focused === 'true' && css`
   background-color: green;
  `}

  ${props => props.filled === 'true' && css`
   background-color: orange;
  `}

  ${props => props.errored === 'true' && css`
   background-color: red;
  `}
  
  margin-bottom: 10px;
`

export const BoxResult = styled.div`
  font-size: 12px;
  background: #f1f1f1;
  border-radius: 5px;
  max-height: 150px;
  overflow: hidden;
  overflow-y: auto;
  position: absolute;
  transform: translateY(-10px);
  z-index: 99;
  width: 270px;
  font-family:Verdana, Geneva, Tahoma, sans-serif;
  &::-webkit-scrollbar{
    display: none;
  }
`

export const ItensSuggestion = styled.div`
  display: flex;
  align-items: center;
  padding: 0 20px;
  gap: 10px;
  cursor:pointer;
  &:hover{
    background-color: #a1a1a1;
  }
`

export const ErrorInfo = styled(SpanTip)`
height: 20px;
  margin-left: 16px;
  svg{
      margin: 0;
  }

  span {
    background: #C53030;
    color: #FFF;

    &::before {
        border-color: #C53030 transparent;
    }
  }
`