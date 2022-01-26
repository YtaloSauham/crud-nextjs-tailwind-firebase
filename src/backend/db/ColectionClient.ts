import Client from "../../core/Client";
import ClientRepository from "../../core/ClientRepository";

export default class ColectionClient implements ClientRepository {


    async save(client: Client): Promise<Client> {
        return null
    }

    async remove(client: Client): Promise<Client> {
        return null
    }

    async getAll(): Promise<Client> {
        return null
    }
    
}