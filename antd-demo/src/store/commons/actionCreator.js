
import http from '../../modules/http'
import { CHANGE_USER_STATE } from './const'
const actionCreator = {
    login({ username, password, success, fail }) {
        return dispatch => {
            http.ajax({
                url: '/api/login.json',
                params: { username, password }
            }).then(res => {
                console.log('res', res)
                let action = {
                    type: CHANGE_USER_STATE,
                    user_state: res
                }
                dispatch(action)
                success && success()
            }).catch(err => {
                console.log('error', err)
                fail && fail()
            })
        }
    }
}

export default actionCreator

