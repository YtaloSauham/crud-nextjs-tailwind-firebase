import Client from "../core/Client";

interface TableProps{
    client: Client[]
}


export default function Table(props){

    function tableHeader(){
        return(
        <tr>
            <th>Codigo</th>
            <th>Nome</th>
            <th>Ações</th>
        </tr>)
        
    }

    function renderBody(){
        return props.client?.map((client,i)=>{
            return (
                <tr key={client.id}>
                    <td>{client.id}</td>
                    <td>{client.name}</td>
                    <td>{client.age}</td>
                </tr>
            )
        })
    }

    return (
        <table>
            <thead>
            {tableHeader()}
            </thead>
            <tbody>
            {renderBody()}
            </tbody>
            
            
        </table>
    )
}