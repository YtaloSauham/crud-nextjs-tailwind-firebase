import Head from 'next/head'
import Image from 'next/image'
import Button from '../components/Button'
import Layout from '../components/Layout'
import Table from '../components/Table'
import Client from '../core/Client'
import styles from '../styles/Home.module.css'
import Form from '../components/Form'
import { useState } from 'react'
import useAppData from '../data/hook/useAppdData'


type modo = 'form' | 'table'
export default function Home() {
  const [client,setClient] = useState<Client>(Client.empty())
  const {modo,alternateModo} = useAppData()

  const clientes = [
    new Client('Ana', 34, '1'),
    new Client('Bea', 45, '2'),
    new Client('Carla', 55, '3'),
    new Client('Pedro', 55, '4'),
  ]


  function Edit(client: Client){
    alternateModo()
    setClient(client)
  }
  function Remove(client: Client){
    console.log(client.name)
  }

  function saveClient(client: Client){
    console.log(client)
    alternateModo()
  }

  function newClient(){
    setClient(Client.empty())
    alternateModo()
  }
  return (
    <div className="flex h-screen justify-center items-center 
    bg-gradient-to-r from-blue-500 to-purple-500
    text-white
    ">
     
      <Layout title='Cadastro Simples'>

        {modo === 'table' ? (
          <>
           <div className='flex justify-end'> 

           <Button  onClick={newClient} className='mb-4 bg-gradient-to-r from-green-400 to-green-700' >
             Novo CLiente</Button>
  
          </div>
       
          <Table client={clientes} Edit={Edit} Remove={Remove}></Table>
          </> ) : (
            <Form client={client} clientChange={saveClient} />
          )}
       

       
      
      </Layout>
     
    </div>
  )
}
