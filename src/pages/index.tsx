import Head from 'next/head'
import Image from 'next/image'
import Button from '../components/Button'
import Layout from '../components/Layout'
import Table from '../components/Table'
import Client from '../core/Client'
import styles from '../styles/Home.module.css'
import Form from '../components/Form'
export default function Home() {
  const clientes = [
    new Client('Ana', 34, '1'),
    new Client('Bea', 45, '2'),
    new Client('Carla', 55, '1'),
    new Client('Pedro', 55, '1'),
  ]


  function Edit(client: Client){
    console.log(client.name)
  }
  function Remove(client: Client){
    console.log(client.name)
  }

  return (
    <div className="flex h-screen justify-center items-center 
    bg-gradient-to-r from-blue-500 to-purple-500
    text-white
    ">
     
      <Layout title='Cadastro Simples'>
        <div className='flex justify-end'> 

         <Button  className='mb-4 bg-gradient-to-r from-green-400 to-green-700'>
           Novo CLiente</Button>

        </div>
     
        <Table client={clientes} Edit={Edit} Remove={Remove}></Table>

       
      <Form client={clientes[1]} />
      </Layout>
     
    </div>
  )
}
