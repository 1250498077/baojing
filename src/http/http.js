import axios from 'axios'
import {savaToLocal, loadFromlLocal, bianli} from '../common/js/store'
import {utils} from './utils'
import {myvue} from  '../main'
export const public_data = {
  // url: 'http://119.23.66.37:8103',
  // url: 'http://192.168.50.30:8103',
  // url: 'http://192.168.50.22:80',
  url: 'http://116.199.2.36',
  token: loadFromlLocal('token')
}

/**
 *  params参数说明：{
 *    method      请求方法
 *    url         请求url
 *    ct_type     请求类型
 *    data        请求参数
 *  }
 * */
class HTTP {
  constructor() {

  }
  request(params) {
    // 判断有没有传get，没有默认为get
    if (!params.method) {
      params.method = 'get';
    }
    // 如果是get请求就把数据绑定到url地址上
    if (params.method === 'get') {
      params.url = params.url + bianli(params.data)
    }
    if (params.method === 'post') {
      params.url = params.url + bianli(params.data)
    }
    // 不传类型就默认为application/x-www-form-urlencoded
    if (!params.ct_type) {
      params.ct_type = 'application/x-www-form-urlencoded';
    }
    // 将ip的路由地址拼接起来
    params.url = public_data.url + params.url
    console.log('http最后一层请求的数据2002')
    console.log(params)
    console.log('tokentokentokentokentokentokentokentoken')
    console.log(loadFromlLocal('token'))
    // console.log(myvue.$store.state.token)
    // 下面这个return不要忘了
    return axios({
      url: params.url,
      method: params.method,
      headers: {
        'token': loadFromlLocal('token'),
        'Content-Type': params.ct_type
      },
      data: params.data,
      withCredentials: false
    }).then((res) => {
      return Promise.resolve(res)
    })
  }
}
export { HTTP };
