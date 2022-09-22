import { getCustomRepository, Repository } from 'typeorm';
import { Connection } from '../entities/Connection';
import { ConnectionsRepository } from '../repositories/ConnectionsRepository';

interface IConnectionCreate {
  socket_id: string;
  user_id: string;
  admin_id?: string;
  id?: string;
}

class ConnectionService {
  private connectionsRepository: Repository<Connection>;

  constructor() {
    this.connectionsRepository = getCustomRepository(ConnectionsRepository);
  }

  async create({ user_id, socket_id, id, admin_id }: IConnectionCreate) {
    const connection = this.connectionsRepository.create({
      socket_id,
      id,
      admin_id,
      user_id,
    });
    await this.connectionsRepository.save(connection);
    return connection;
  }
}

export { ConnectionService };
