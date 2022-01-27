import Client from "../../core/Client";
import ClientRepository from "../../core/ClientRepository";
import firebase from "../firebase";
export default class ColectionClient implements ClientRepository {


    conversor = {
        toFirestore( client : Client) {
            return {
                name: client.name,
                age: client.age,
            }
        },
        fromFiresotre(snapshot: firebase.firestore.QueryDocumentShapsot , options: firebase.firesotre.SnapshotOptions) : Client{

            const dados = snapshot.data(options)
            return new Client(dados.name, dados.age,snapshot.id)

        }
    }


    async save(client: Client): Promise<Client> {
        return null
    }

    async remove(client: Client): Promise<void> {
        return null
    }

    async getAll(): Promise<Client[]> {
        return null
    }
    
}