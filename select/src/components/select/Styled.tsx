import { styled} from "styled-components";

export const Container = styled.div`
  .searchInput{
    display: flex;
    align-items: center;
    background-color: #cccccc;
    width: 500px;
    height: 75px;
    border-radius: 5px;
    gap: 24px;
    padding: 0 32px;
    margin-bottom: -16px;
    input{
      border: 0;
      outline: 0;
      background: none;
      font-size: 22px;
      width: 100%;
    }
    svg{
      font-size: 30px;
      cursor: pointer;
    }
  }

  .dataResult{
    font-size: 12px;
    background: #f1f1f1;
    border-radius: 5px;
    max-height: 150px;
    overflow: hidden;
    overflow-y: auto;
    position: absolute;
    transform: translateY(15px);
    z-index: 99;
    width: 565px;
  }

  .dataResult::-webkit-scrollbar{
    display: none;
  }

  .dataItem{
    display: flex;
    align-items: center;
    padding: 0 20px;
    gap: 10px;
    cursor:pointer;
    &:hover{
      background-color: #a1a1a1;
    }
  }
`