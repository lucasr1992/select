import { InputHTMLAttributes, useEffect, useRef, useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { AiOutlineClose, AiOutlineExclamationCircle } from 'react-icons/ai'
import { Container } from './Styled'

interface Option{
  id: number,
  label: string
}


interface PropsData extends InputHTMLAttributes<HTMLInputElement> {
  options: Array<Option>
  erro?: string
  onInputSearchChange: (inputSearch: number) => void;
}

const SelectDefault: React.FC<PropsData> = ({options, onInputSearchChange, erro,  ...rest}) => {
  const [filterSearch, setFilerSearch] = useState<Option[]>([])
  const [inputSearch, setInputSearch] = useState('');
  const [sugestion, setSugestion] = useState(false)
  const [error, setError] = useState<string | undefined>(erro)
  

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

  function handleComplete(item:string, id:number){
    setInputSearch(item);
    setFilerSearch([]);
    onInputSearchChange(id);
  }

  function clearFilter(){ 
    setFilerSearch([])
    setInputSearch('')
    onInputSearchChange(0);  
  }

  

  return(
    <Container>
      <div className='searchInput'>
        <BsSearch/>
        <input  {...rest} value={inputSearch} onChange={handleFilter}  type="text" placeholder='Pesquisa...'/>
        {inputSearch !== "" ? <AiOutlineClose onClick={clearFilter}/> : null}
        {erro && <AiOutlineExclamationCircle/>}
      </div>
        {sugestion &&
          <div className="dataResult">
          {filterSearch.map((item, index) => {
            return(
              <div key={item.id} className='dataItem' onClick={() => handleComplete(item.label, item.id)}>
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


