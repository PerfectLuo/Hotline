export default {

  async sendSMS ($axios, params) {
    const res = await $axios.$post('/user/sendSMS', params)
    return res
  }

}
