import {Provider} from '@/apis/lib/Provider';
import {UserService} from "@/apis/service/user.service";

/**
 *
 * @description 유저 생성
 * @param user
 */
export const createUser = async (user: any) => {
  // todo 타입 미정

}

export const findOneUser = async () => {
  const userService = Provider.getService(UserService);
  const user = await userService.findUser();
  return JSON.parse(JSON.stringify(user));
}