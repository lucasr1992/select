'use client'
import { useState } from 'react';
import { Itens } from '@/components/data/data';
import SelectDefault from '@/components/select/Select';

export default function Home() {
  const [selectCargo, setSelectCargo] = useState('');
 
  function setCargo(value: string) {
    setSelectCargo(value);
  }


  function mostrarValor(){
    console.log("Valor Um: ", selectCargo)
  }

  return (
    <div>
      <SelectDefault name='cargos' options={Itens} onInputSearchChange={setCargo}/>
     
      <button onClick={mostrarValor}>Entrar</button>
    </div>
  )
}
