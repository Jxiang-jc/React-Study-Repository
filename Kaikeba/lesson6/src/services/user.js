import request from '../utils/request'
import prefix from './prefix'

export async function logoutRequest() {
    return await request(prefix + 'logout')
}