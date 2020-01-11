import { CHANGE_USER_INFO } from './const'

const actionCreator = {
    login(username) {
        return {
            type: CHANGE_USER_INFO,
            username
        }
    }
}

export default actionCreator
