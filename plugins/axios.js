export default function ({ $axios, app, redirect }) {
  const token = process.env.VUE_APP_TOKEN
  $axios.setToken(token, 'Bearer')
}
