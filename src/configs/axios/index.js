/*
* this file is main config for axios
*/
import axios from "axios";
import errorResponseHandler from './errorResponseHandler'

const instance = axios.create({
  baseURL: `${process.env.REACT_APP_HOST}/api/v1/member`,
})

// interceptor for handling(not needed catch() after then() func anymore) all errors
instance.interceptors.response.use(
  (response) => response,
  errorResponseHandler
)


export default instance