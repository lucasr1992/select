import { InputHTMLAttributes, useEffect, useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { AiOutlineClose, AiOutlineExclamationCircle } from 'react-icons/ai'
import { Container, Search, FindIcon, CleanIcon, ErrorIcon, Divider, BoxResult, ItensSuggestion, ErrorInfo } from './Styled'

interface Option{
  id: number,
  label: string
}

interface PropsData extends InputHTMLAttributes<HTMLInputElement> {
  options: Array<Option>
  erro?: string
  onInputSearchChange: (inputSearch: number) => void;
  placeholder?: string
}

const SelectDefault: React.FC<PropsData> = ({placeholder, options, onInputSearchChange, erro,  ...rest}) => {
  const [filterSearch, setFilerSearch] = useState<Option[]>([])
  const [inputSearch, setInputSearch] = useState('');
  const [sugestion, setSugestion] = useState(false)
  const [error, setError] = useState<string | undefined>(erro)
  const [focus, setFocus] = useState('false')
  const [filled, setFilled] = useState('false')
  const [errored, setErrored]= useState('false')

  useEffect(() => {
    if(inputSearch === ''){
      setFilerSearch([])   
    }    
    if(erro !== '' && erro !== undefined){
      setErrored('true')
    }else{
      setErrored('false')
    }
  }, [inputSearch, erro])

  const handleFilter = (e: React.ChangeEvent<HTMLInputElement>) => {   //faz o filtro dos valores
    setInputSearch(e.target.value)
    const newFilter = options.filter((value) => {
      return value.label.toLowerCase().includes(inputSearch.toLocaleLowerCase());
    });
    
    setFilerSearch(newFilter)
    if(newFilter.length === 0){
      setSugestion(false)
    }else{
      setSugestion(true)
    }

    if(newFilter.length === 1){
      onInputSearchChange(newFilter[0].id);
      setFilerSearch([]);
      setInputSearch(newFilter[0].label);
      setFilled('true')
    }
  }

  function handleComplete(item:string, id:number){
    setInputSearch(item);
    setFilerSearch([]);
    onInputSearchChange(id);
    setFilled('true')
  }

  function clearFilter(){ 
    setFilerSearch([])
    setInputSearch('')
    onInputSearchChange(0);  
    setFilled('false')
  }

  const LostFocus = (e: React.ChangeEvent<HTMLInputElement>) => { 
    setFocus('false')
    if(e.target.value !== ''){  
      handleFilter(e)
    }      
  }

  return(
    <Container>
      <Search>
        <FindIcon errored={errored} filled={filled} focused={focus}>
          <BsSearch/>
        </FindIcon>
        <input onBlur={LostFocus} onFocus={() => setFocus('true')} autoComplete="off" {...rest} value={inputSearch} onChange={handleFilter}  type="text" placeholder={placeholder}/>
        <CleanIcon errored={errored} filled={filled} focused={focus}>
          {inputSearch !== "" ? <AiOutlineClose onClick={clearFilter}/> : null}
        </CleanIcon>
        { erro && 
          <ErrorIcon errored={errored} filled={filled} focused={focus}>
            <ErrorInfo title={erro}><AiOutlineExclamationCircle/></ErrorInfo>
          </ErrorIcon>
        }
      </Search>
      <Divider errored={errored} filled={filled} focused={focus}/>
        {sugestion &&
          <BoxResult>
            {filterSearch.map((item, index) => {
              return(
                <ItensSuggestion key={item.id} onClick={() => handleComplete(item.label, item.id)}>
                  <p>{item.label}</p>
                </ItensSuggestion>
              )
            })}
          </BoxResult>
        }    
    </Container>
  )
}

export default SelectDefault;


