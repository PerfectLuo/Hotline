import Mock from 'mockjs'

Mock.mock('/test', 'post', {
  code: 0,
  message: 'SUCCESS',
  data: [
    { count: '1', cause: '0-10' },
    { count: '3', cause: '11-20' },
    { count: '13', cause: '21-30' },
    { count: '2', cause: '91-100岁' }
  ]
})
