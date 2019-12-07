// 本地操作用户信息模块 分别是设置信息，获取信息，删除信息
const KEY = 'hm-toutiao-pc-ly-user-key'
const local = {
  setUser (user) {
    const jsonStr = JSON.stringify(user)
    window.sessionStorage.setItem(KEY, jsonStr)
  },
  getUser () {
    const jsonStr = window.sessionStorage.getItem(KEY)
    return JSON.parse(jsonStr)
  },
  delUser () {
    //   清除信息
    window.sessionStorage.removeItem(KEY)
  }
}
export default local
