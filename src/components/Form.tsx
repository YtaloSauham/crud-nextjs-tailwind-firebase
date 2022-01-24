import { useState } from 'react'
import Client from '../core/Client'
import useAppData from '../data/hook/useAppdData'
import Button from './Button'
import Input from './Input'



interface FormProps{
  client: Client
  clientChange?: (client : Client) => void
}

export default function Form(props: FormProps){
  const {alternateModo} = useAppData()
  const id= props.client?.id 
  const [name,setName]=useState(props.client?.name ?? '')
  const [age,setAge]=useState(props.client?.age ?? 0)

    return (
        <div>
          {id ? (
            <Input text="Codigo" value={id} disable className='mb-5'/>

          ) : false}

          <Input text="Nome" value={name} onchange={setName} className='mb-5' />

          <Input text="Idade"  type='number' value={age}  onchange={setAge}/>

          <div className='flex justify-end mt-3'>
            <Button onClick={() => props.clientChange?.(new Client(name,+age, id))}
             className=' bg-gradient-to-r from-blue-400 to-blue-700 mr-2'>
              {id ? 'Alterar' : 'Salvar'}
            </Button>

            <Button onClick={alternateModo} className=' bg-gradient-to-r from-gray-400 to-gray-700'>
              Cancelar
            </Button>
          </div>
        </div>

        

    )
}