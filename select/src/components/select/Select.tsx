import { InputHTMLAttributes, useEffect, useRef, useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { AiOutlineClose } from 'react-icons/ai'

import { Container } from './Styled'

interface Option{
  id: number,
  label: string
}

interface PropsData extends InputHTMLAttributes<HTMLInputElement> {
  options: Array<Option>;
  onInputSearchChange: (inputSearch: string) => void;
}

const SelectDefault: React.FC<PropsData> = ({options, onInputSearchChange, ...rest}) => {
  const [filterSearch, setFilerSearch] = useState<Option[]>([])
  const [inputSearch, setInputSearch] = useState('');
  const [sugestion, setSugestion] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if(inputSearch === ''){
      setFilerSearch([])   
    }
  }, [inputSearch])

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
  }

  function handleComplete(item:string){
    setInputSearch(item);
    setFilerSearch([]);
    onInputSearchChange(item);
  }

  function clearFilter(){ 
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
          {filterSearch.map((item, index) => {
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


