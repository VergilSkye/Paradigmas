import axios from 'axios'

export const http = axios.create({
  baseURL: 'https://floating-mesa-49850.herokuapp.com/v1/zoo'
})
