import {Provider} from '@/lib/Provider';
import {UserService} from "@/apis/service/user.service";

export const findOneUser = async () => {
  const userService = Provider.getService(UserService);
  // const data = await executeQuery('SELECT * FROM user_entity', '');
  // return JSON.parse(JSON.stringify(data))
  const user = await userService.findUser();
  return JSON.parse(JSON.stringify(user));
}