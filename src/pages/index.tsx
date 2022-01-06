import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout'
import Table from '../components/Table'
import Client from '../core/Client'
import styles from '../styles/Home.module.css'

export default function Home() {
  const clientes = [
    new Client('Ana', 34, '1'),
    new Client('Bea', 45, '1'),
    new Client('Carla', 55, '1'),
    new Client('Pedro', 55, '1'),
  ]

  return (
    <div className="flex h-screen justify-center items-center 
    bg-gradient-to-r from-blue-500 to-purple-500
    text-white
    ">
      <Layout title='Cadastro Simples'>
        <Table client={clientes} ></Table>
      </Layout>
     
    </div>
  )
}
