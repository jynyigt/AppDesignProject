import axios from 'axios';
import {API_URL} from '../constants/variable';
export default class baseControl {
  Service = null;
  constructor(service) {
    this.Service = service;
  }

  getObject(schemaName, funcName, data) {
    const url = schemaName + (funcName ? `/${funcName}` : '');
    return this.callServiceMethod(url, data, 'GET');
  }

  callServiceMethod(urlPath, data, method) {
    const apiHost = API_URL;
    let url = `${apiHost}/${urlPath}`;
    console.log('callServiceMethod', url);
    var headers = {
      cookie: 'APIAuthToken=' + global.token,
      ApplicationKey: 'Mobile',
      'X-Country-Id': 'TR',
      'X-Language-Id': 'TR',
    };
    return this.callAnyServiceMethod(url, data, method, headers);
  }
  async callAnyServiceMethod(url, data = {}, method, headers) {
    console.log('anyservice, url', url);
    console.log('anyservice, data', data);

    const params = new URLSearchParams(data).toString();
    const fullUrl = params ? `${url}?${params}` : url;

    var authOptions = {
      method,
      url: fullUrl,
      headers,
      withCredentials: false,
    };
    console.log({authOptions});

    return await axios(authOptions)
      .then(response => {
        return response.data;
      })
      .catch(error => {
        console.log('api error', error);
      });
  }
}
