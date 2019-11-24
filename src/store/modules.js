import {USER_INFO} from "@/store/mutation-type";

export default {
  [USER_INFO](state, {userInfo}) {
    // 保存用户信息
    state.userInfo = userInfo;

  }
}
