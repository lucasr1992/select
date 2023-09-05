'use client'
import { useState } from 'react';
import { Itens } from '@/components/data/data';
import { ItensrEV } from '@/components/data/data_rev';
import SelectDefault from '@/components/select/Select';
import ColectValue from '@/hooks/coletarcampos';
import Reduce from '@/hooks/reducecampos';
import CamposNecessarios from '@/hooks/camposnecessarios';

interface PropsData{
  campo: string;
  valor: number | string;
}

export default function Home() {
  const [array, setArray] = useState<PropsData[]>([]) 
  const [errorCargo, setErrorCargo] = useState<string | undefined>();
  const [errorNivel, setErrorNivel] = useState<string | undefined>();
  const camposNecessarios = [ 'nivel', 'cargo']

  function setVal(value: number | string, name: string) {
    const newArray = ColectValue({options: array, value, name})
    setArray(newArray)
  }

  function EnviarRequisicao(){
    const objReq = Reduce({options: array})
    console.log(objReq);
  }

  function EnviarErro(){   
    const camposErro = CamposNecessarios(array, camposNecessarios) 
    const msgErro = "Erro neste campo"
  }

  return (
    <div>
      <SelectDefault name='cargos' erro={errorCargo} options={Itens} onInputSearchChange={(value) => {setVal(value, 'cargo'), setErrorCargo('')}}/>
      <SelectDefault name='nivel' erro={errorNivel} options={ItensrEV} onInputSearchChange={(value) => {setVal(value, 'nivel'), setErrorNivel('')}}/>
      <button onClick={EnviarRequisicao}>Entrar</button>
      <button onClick={EnviarErro}>Erro</button>
    </div>
  )
}






