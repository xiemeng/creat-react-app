import {M_BASE_URL} from './commoe_url'
import axios from 'axios'

export const userAddrList = (id) => axios.post(M_BASE_URL, {   //收货地址列表
  opact: 'UserAddr/userAddrList',
  id:id,
});