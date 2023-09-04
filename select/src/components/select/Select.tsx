import { InputHTMLAttributes, useEffect, useRef, useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { AiOutlineClose } from 'react-icons/ai'

import { Container } from './Styled'

interface PropsData extends InputHTMLAttributes<HTMLInputElement> {
  options:   
    {
      id: number,
      label: string
    }[];
    onInputSearchChange: (inputSearch: string) => void;
}



const SelectDefault: React.FC<PropsData> = ({options, onInputSearchChange, ...rest}) => {
    
  const [filterSearch, setFilerSearch] = useState<PropsData[]>([])
  const [inputSearch, setInputSearch] = useState('');
  const [sugestion, setSugestion] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  
  

  useEffect(() => {
    if(inputSearch === ''){
      setFilerSearch([])   // verifica se no input tem algum valor se tiver abre a lista
    }
  }, [inputSearch])

  const handleFilter = (e: React.ChangeEvent<HTMLInputElement>) => {   //faz o filtro dos valores
    setInputSearch(e.target.value)
  
    const newFilter: any = options.filter((value: PropsData['options'][0]) => {
      return value.label.toLowerCase().includes(inputSearch.toLocaleLowerCase());
    });
    
    setFilerSearch(newFilter)
    if(newFilter.length === 0){
      setSugestion(false)
    }else{
      setSugestion(true)
    }
  }

  function handleComplete(item:string){ // ao clicar na lista ele seta o valor 
    setInputSearch(item);
    setFilerSearch([]);
    onInputSearchChange(item);
  }

  function clearFilter(){ //limpar o campo e os valores
    setFilerSearch([])
    setInputSearch('')
    onInputSearchChange('');
  }

  return(
    <Container>
      <div className='searchInput'>
        <BsSearch/>
        <input ref={inputRef} {...rest} value={inputSearch} onChange={handleFilter}  type="text" placeholder='Pesquisa...'/>
        {inputSearch !== "" ? <AiOutlineClose onClick={clearFilter}/> : null}
      </div>
        {sugestion &&
          <div className="dataResult">
          {filterSearch.map((item:any, index:number) => {
            return(
              <div key={item.id} className='dataItem' onClick={() => handleComplete(item.label)}>
                <p>{item.label}</p>
              </div>
            )
          })}
          </div>
        }    
    </Container>
  )
}

export default SelectDefault;


