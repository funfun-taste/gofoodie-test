import {InjectRepository, Service} from "@/apis/lib/Provider";
import {UserEntity} from "@/apis/entities/users/user.entity";
import {Repository} from "typeorm";

@Service
export class UserService {
  @InjectRepository(UserEntity) userRepository: Repository<UserEntity>

  async findUser() {
    return await this.userRepository.find({});
  }
}