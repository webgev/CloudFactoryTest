import axios, {AxiosRequestConfig} from 'axios';
import {ITickerData} from './Interfaces';

const URI = 'https://poloniex.com/public';

export class Api {
  static async invoke<T>(
    params: Record<string, string>,
    method: 'post' | 'get' = 'get',
    options?: AxiosRequestConfig,
  ) {
    try {
      options = options || {};
      options.params = params;
      let response;
      if (__DEV__) {
        console.log(URI, params, options);
      }
      if (method === 'get') {
        response = await axios.get<T>(URI, options);
      } else {
        response = await axios.post<T>(URI, params, options);
      }

      let responseJsonData = await response.data;
      if (__DEV__) {
        console.log(responseJsonData);
      }
      return responseJsonData;
    } catch (e) {
      if (__DEV__) {
        console.warn(e);
      }
      throw e;
    }
  }

  /** вернет Котировки */
  static getTicker = async () => {
    const res = await Api.invoke<ITickerData>({
      command: 'returnTicker',
    });
    return res;
  };
}
