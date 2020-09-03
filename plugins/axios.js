import { Notification } from 'element-ui';
// import { getToken } from '@/util/util'

const codeMessage = {
  200: '服务器成功返回请求的数据。',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）。',
  204: '删除数据成功。',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网络异常',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网络异常'
}

const notify = (message) => {
  Notification.error({
    title: '异常提醒',
    message
  });
}

export default function ({ $axios, redirect }) {
  // // 请求拦截器
  // $axios.onRequest((config) => {
  //   config.headers.token = getToken()
  // })
  // 响应拦截器
  $axios.onResponse((config) => {
    if (config.status !== 200) {
      // throw new Error(codeMessage[config.status])
      notify(`${config.status}：${codeMessage[config.status]}`)
    } else if (config.data.resultCode !== '0') {
      notify(`${config.data.resultCode}：${config.data.resultMsg || '服务器繁忙'}`)
      // throw new Error(config.data.message || '服务器错误')
    }
    // else if (config.data.resultCode === '1') {
    //   Toast('权限验证已失效，请重新登录')
    //   redirect('/')
    // } 
  })
  // 异常拦截器
  $axios.onError((error) => {
    if (error.response) {
      const code = parseInt(error.response && error.response.status)
      if (code !== 200) {
        notify(`${code}：服务器出错了`)
        // redirect(`/${code}`)
      }
    } else {
      notify('服务器出错了')
    }
  })
}
