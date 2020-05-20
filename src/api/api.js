import axios from 'axios'
export default function ajax(url, data, reqType) {
  return new Promise(function(resolve, reject) {
      let promise
      let dataStr = ''
      if (reqType == 'Get') {
        Object.keys(data).forEach(key => {
          dataStr += key + '=' + data[key] + '&'
        });
        if (dataStr !== '') {
          dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'))
          url = url + '?' + dataStr
        }
        promise = axios.get(url)
      } else {
        promise = axios.post(url, data)
      }
      promise.then(function(response) {
          resolve(response.data)
        })
        .catch(function(error) {
          reject(error)
        })
    })
  }
