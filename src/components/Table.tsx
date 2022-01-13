import Client from "../core/Client";
import { IconeDelet, IconeEdit } from "./icones";

interface TableProps{
    client: Client[]
    Edit?: (client: Client) => void
    Remove?: (client: Client) => void

}


export default function Table(props: TableProps){

    const showAction = props.Edit || props.Remove

    function tableHeader(){
        return(
        <tr>
            <th className={`text-left p-4`}>Codigo</th>
            <th className={`text-left p-4`}>Nome</th>
            <th className={`text-left p-4`}>Idade</th>
            {showAction ? (<th className={`text-left p-4`}>Ações</th>) :false }
        </tr>)
        
    }


    function renderActions(client: Client){
        return (
            <td className="flex ">
                {props.Edit ? (<button className={`
                     flex justify-center items-center 
                     text-green-600 rounded-full p-2 m-1
                     hover:bg-purple-50`}
                     onClick={()=>props.Edit?.(client)}
                     >{IconeEdit}</button>) : false}
                
                {props.Remove ? (
                <button  className={` flex justify-center items-center 
                     text-red-500 rounded-full p-2 m-1
                     hover:bg-purple-50`}
                     onClick={()=>props.Remove?.(client)}
                     >{IconeDelet}</button>) : false}

            </td>
        )
    }

    function renderBody(){
        return props.client?.map((client,i)=>{
            return (
                <tr key={client.id} className={`${i % 2 === 0 ? 'bg-purple-200' : 'bg-purple-100' }`}>
                    <td className="text-left p-4">{client.id}</td>
                    <td className="text-left p-4">{client.name}</td>
                    <td className="text-left p-4">{client.age}</td>
                    { showAction ? renderActions(client) : false}
                </tr>
            )
        })
    }

    return (
        <table className={` w-full rounded-xl overflow-hidden`}>
            <thead className={`
                text-gray-100
                bg-gradient-to-r from-purple-500 to-purple-800
            `}>
            {tableHeader()}
            </thead>
            <tbody>
            {renderBody()}
            </tbody>
            
            
        </table>
    )
}