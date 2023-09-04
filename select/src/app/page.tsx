'use client'
import { Itens } from '@/components/data/data';
import SelectDefault from '@/components/select/Select';
import { useState } from 'react';


export default function Home() {
  const [selectUm, setSelectUm] = useState('');
  const [inputDois, setInputDois] = useState('');
 

  function setUm(value: string) {
    setSelectUm(value);
  }

  function setDois(value: string) {
    setInputDois(value);
  }



  function mostrarValor(){
    console.log("Valor Um: ", selectUm)
    console.log("Valor Dois: ", inputDois)
  }


  return (
    <div>
      <SelectDefault options={Itens} onInputSearchChange={setUm}/>
      <SelectDefault options={Itens} onInputSearchChange={setDois}/>
      <button onClick={mostrarValor}>Entrar</button>
    </div>
  )
}
