import { InputHTMLAttributes, useEffect, useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { AiOutlineClose, AiOutlineExclamationCircle } from 'react-icons/ai'
import { Container, Search, FindIcon, CleanIcon, ErrorIcon, Divider, BoxResult, ItensSuggestion, ErrorInfo } from './Styled'

interface PropsData extends InputHTMLAttributes<HTMLInputElement> {
  erro?: string
  onInputSearchChange: (inputSearch: string) => void;
  placeholder?: string
}

const InputDefault: React.FC<PropsData> = ({placeholder, onInputSearchChange, erro,  ...rest}) => {
  const [inputSearch, setInputSearch] = useState('');
  const [focus, setFocus] = useState('false')
  const [filled, setFilled] = useState('false')
  const [errored, setErrored]= useState('false')

  useEffect(() => {
    if(erro !== '' && erro !== undefined){
      setErrored('true')
    }else{
      setErrored('false')
    }
  }, [inputSearch, erro])

  const handleFilter = (e: React.ChangeEvent<HTMLInputElement>) => {   //faz o filtro dos valores
    setInputSearch(e.target.value.toUpperCase()) 
    if(e.target.value !== ''){
      setFilled('true') 
    }else{ 
      setFilled('false') 
    }     
  }

  const LostFocus = (e: React.ChangeEvent<HTMLInputElement>) => { 
    setFocus('false')
    onInputSearchChange(inputSearch.toUpperCase())
  }

  return(
    <Container>
      <Search>
        <FindIcon errored={errored} filled={filled} focused={focus}>
          
        </FindIcon>
        <input onBlur={LostFocus} onFocus={() => setFocus('true')} autoComplete="off" {...rest} value={inputSearch} onChange={handleFilter}  type="text" placeholder={placeholder}/>
        { erro && 
          <ErrorIcon errored={errored} filled={filled} focused={focus}>
            <ErrorInfo title={erro}><AiOutlineExclamationCircle/></ErrorInfo>
          </ErrorIcon>
        }
      </Search>
      <Divider errored={errored} filled={filled} focused={focus}/>
    </Container>
  )
}

export default InputDefault;


