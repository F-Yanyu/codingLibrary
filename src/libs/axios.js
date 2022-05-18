import axios from 'axios'
// import { getStore, setStore } from './storage'
// import { router } from '../router/index'
// import { Message } from 'ElementUI'
// import Cookies from 'js-cookie'
// 统一请求路径前缀
let base = '/api'
// 超时设定
axios.defaults.timeout = 60000

axios.interceptors.request.use(
  (config) => {
    return config
  },
  (err) => {
    this.$message.error('请求超时')
    return Promise.resolve(err)
  }
)

// http response 拦截器
// axios.interceptors.response.use(
//   (response) => {
//     const data = response.data

//     // 根据返回的code值来做不同的处理(和后端约定)
//     switch (data.code) {
//       case 401:
//         // 未登录 清除已登录状态
//         Cookies.set('userInfo', '')
//         setStore('accessToken', '')
//         if (router.history.current.name != 'login') {
//           if (data.message !== null) {
//             this.$message.error('401-' + data.message)
//           } else {
//             this.$message.error('未知错误，请重新登录')
//           }
//           router.push('/login')
//         }
//         break
//       case 403:
//         // 没有权限
//         if (data.message !== null) {
//           this.$message.error('403-' + data.message)
//         } else {
//           this.$message.error('未知错误')
//         }
//         break
//       case 500:
//         // 错误
//         if (data.message !== null) {
//           if ('Cannot add a comment to a suspended task' === data.message) {
//             this.$message.error('500-该流程已被挂起，请解除该状态后重试')
//           } else if (
//             'Transaction silently rolled back because it has been marked as rollback-only' !==
//             data.message
//           ) {
//             this.$message.error('500-' + data.message)
//           }
//         } else {
//           console.error('未知错误')
//         }
//         break
//       default:
//         return data
//     }

//     return data
//   },
//   (err) => {
//     // 返回状态码不为200时候的错误处理
//     // Message.error("other-"+err.toString());
//     return Promise.resolve(err)
//   }
// )

export const getRequest = (url, params) => {
  // let accessToken = getStore('accessToken')
  return axios({
    method: 'get',
    url: `${base}${url}`,
    params: params
    // headers: {
    //   accessToken: accessToken
    // }
  })
}

export const postRequest = (url, params) => {
  // let accessToken = getStore('accessToken')
  return axios({
    method: 'post',
    url: `${base}${url}`,
    data: params,
    transformRequest: [
      function (data) {
        let ret = ''
        for (let it in data) {
          ret +=
            encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
        }
        return ret
      }
    ]
    // headers: {
    //   'Content-Type': 'application/x-www-form-urlencoded',
    //   accessToken: accessToken
    // }
  })
}

export const putRequest = (url, params) => {
  // let accessToken = getStore('accessToken')
  return axios({
    method: 'put',
    url: `${base}${url}`,
    data: params,
    transformRequest: [
      function (data) {
        let ret = ''
        for (let it in data) {
          ret +=
            encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
        }
        return ret
      }
    ]
    // headers: {
    //   'Content-Type': 'application/x-www-form-urlencoded',
    //   accessToken: accessToken
    // }
  })
}

export const deleteRequest = (url, params) => {
  // let accessToken = getStore('accessToken')
  return axios({
    method: 'delete',
    url: `${base}${url}`,
    params: params
    // headers: {
    //   accessToken: accessToken
    // }
  })
}

export const importRequest = (url, params) => {
  // let accessToken = getStore('accessToken')
  return axios({
    method: 'post',
    url: `${base}${url}`,
    data: params
    // headers: {
    //   accessToken: accessToken
    // }
  })
}

export const uploadFileRequest = (url, params) => {
  // let accessToken = getStore('accessToken')
  return axios({
    method: 'post',
    url: `${base}${url}`,
    params: params
    // headers: {
    //   accessToken: accessToken
    // }
  })
}

export function exportPostFile(url, params = {}) {
  return new Promise((resolve, reject) => {
    axios.defaults.headers['content-type'] = 'application/json;charset=UTF-8'
    axios({
      method: 'post',
      url: `${base}${url}`, // 请求地址
      data: params, // 参数
      responseType: 'blob' // 表明返回服务器返回的数据类型
    }).then(
      (response) => {
        resolve(response.data)
        let blob = new Blob([response.data], {
          // type: 'application/vnd.ms-excel'
        })
        let fileName = Date.parse(new Date()) + '.log'
        if (window.navigator.msSaveOrOpenBlob) {
          navigator.msSaveBlob(blob, fileName)
        } else {
          let link = document.createElement('a')
          link.href = window.URL.createObjectURL(blob)
          link.download = fileName
          link.click()
          //释放内存
          window.URL.revokeObjectURL(link.href)
        }
      },
      (err) => {
        reject(err)
      }
    )
  })
}

export const getJson = (url) => {
  return axios.http.get(url)
}
