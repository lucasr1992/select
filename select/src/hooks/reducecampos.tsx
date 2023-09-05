interface Option{
  campo: string;
  valor: number | string;
}

interface PropsFunction{
  options: Array<Option>
}

export default function Reduce({options}: PropsFunction){
  const itemRev: { [key: string]: number | string} = {};
  for (const opt of options) {
    itemRev[opt.campo] = opt.valor;
  }
  return itemRev
}