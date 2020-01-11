import qs from 'querystring'
const query = {
    parse(str) {
        str = str.replace('?', '')
        return qs.parse(str)
    },
    stringify(str) {
        return '?' + qs.stringify(str)
    }
}

export default query