import {InjectRepository, Service} from "@/lib/Provider";
import {UserEntity} from "@/apis/entities/users/user.entity";
import {Repository} from "typeorm";

@Service
export class UserService {
  @InjectRepository(UserEntity) userRepository: Repository<UserEntity>

  async findUser() {
    console.log(await this.userRepository.find({}))
    return this.userRepository.find({});
  }
}