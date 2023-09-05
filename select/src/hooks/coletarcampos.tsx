interface Option{
  campo: string;
  valor: number | string;
}

interface PropsFunction{
  options: Array<Option>
  name: string
  value: number | string
}

export default function ColectValue({options, value, name}: PropsFunction){
  const newItem = options.filter(obj => obj.campo !== name )
  if(value !== 0 && value !== ''){
    const newObject = {
      campo: name,
      valor: value
    }
    newItem.push(newObject)
  }
  return newItem
}