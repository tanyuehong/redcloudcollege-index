import request from '@/utils/serverRq'

export default {
  // 获取查看用户的信息
  getShowUserInfo(parm) {
    return request({
      url: `/home/ucenter/getShowUserInfo`,
      method: 'post',
      data: parm,
    });
  },

  getRegisterPage() {
    return request({
      url: `/home/ucenter/getRegisterPage`,
      method: 'get',
    })
  }
};
