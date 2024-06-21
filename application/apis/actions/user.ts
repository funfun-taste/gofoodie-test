import {Provider} from '@/lib/Provider';
import {UserService} from "@/apis/service/user.service";

export const findOneUser = async () => {
  const userService = Provider.getService(UserService);
  const user = await userService.findUser();
  return JSON.parse(JSON.stringify(user));
}