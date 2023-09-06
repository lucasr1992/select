import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  span {
    display: flex;
    justify-content: center;
    width: 160px;
    background: #b85f5f;
    padding: 8px;
    border-radius: 4px;
    font-size: 14px;
    font-weight: 500;
    opacity: 0;
    transition: opacity 0.2s;
    visibility: hidden;
    position: absolute;
    bottom: calc(100% + 12px);
    left: 50%;
    transform: translateX(-50%);
    color: #000000;
    font-weight: 900;
    font-family: sans-serif;
    font-size: 12px;
    &::before {
      content: '';
      border-style: solid;
      border-color: #b85f5f transparent;
      border-width: 6px 6px 0 6px;
      top: 100%;
      position: absolute;
      left: 46% 
    }
  }
  &:hover span{
    opacity: 1;
    visibility: visible;
  }
`;