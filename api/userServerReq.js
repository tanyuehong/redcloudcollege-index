import request from '@/utils/serverRq'

export default {
  // 获取查看用户的信息
  getShowUserInfo(uId,type) {
    return request({
      url: `/home/ucenter/getShowUserInfo/${uId}/${type}`,
      method: "get"
    });
  },

  getRegisterPage() {
    return request({
      url: `/home/ucenter/getRegisterPage`,
      method: 'get',
    })
  }
};
