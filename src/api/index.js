// 导出配置好的axios提供给main挂载
import axios from 'axios'

// 对axios配置
// baseurl 作用：设置基准（前面一段地址相同）
axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0/'

// 导出配置
export default axios
