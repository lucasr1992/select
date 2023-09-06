'use client'
import { useState } from 'react';
import { Itens } from '@/components/data/data';
import { ItensrEV } from '@/components/data/data_rev';
import SelectDefault from '@/components/select/Select';
import ColectValue from '@/hooks/coletarcampos';
import TransformJSON from '@/hooks/trasformJSON';
import CamposNecessarios from '@/hooks/camposnecessarios';
import InputDefault from '@/components/input/Input';


interface PropsData{
  campo: string;
  valor: number | string;
}

export default function Home() {
  const [array, setArray] = useState<PropsData[]>([]) 
  const [errorCargo, setErrorCargo] = useState<string | undefined>();
  const [errorNivel, setErrorNivel] = useState<string | undefined>();
  const [errorTipo, setErrorTipo] = useState<string | undefined>();
  const camposNecessarios = [ 'nivel', 'cargo']

  function setVal(value: number | string, name: string) {

    const newArray = ColectValue({options: array, value, name})
    setArray(newArray)
  }

  function EnviarRequisicao(){
    const objReq = TransformJSON({options: array})
    console.log(objReq);
  }

  function ItemFaltante(){   
    const camposErro = CamposNecessarios(array, camposNecessarios) 
    console.log(camposErro)
  }

  function EnviarErro(){   
    setErrorNivel('Favor Informar Cargo')
  }

  return (
    <div>
      <SelectDefault placeholder={'Pesquisa Cargo'} name='cargos' erro={errorCargo} options={Itens} onInputSearchChange={(value) => {setVal(value, 'cargo'), setErrorCargo('')}}/>
      <SelectDefault placeholder={'Pesquisa Nivel'} name='nivel' erro={errorNivel} options={ItensrEV} onInputSearchChange={(value) => {setVal(value, 'nivel'), setErrorNivel('')}}/>
      <InputDefault placeholder={'Informe o Tipo'} name='tipo' erro={errorTipo} onInputSearchChange={(value) => {setVal(value, 'tipo'), setErrorTipo('')}}/>
      <button onClick={EnviarRequisicao}>Entrar</button>
      <button onClick={ItemFaltante}>Falta</button>
      <button onClick={EnviarErro}>Enviar Erro</button>
      
    </div>
  )
}






