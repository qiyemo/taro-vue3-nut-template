import Taro from "@tarojs/taro";


const baseUrl = 'https://jczl.11ms.cn/yh-jczl';

interface IResponse {
  code: number;
  data: any;
  msg: string;
  success: boolean;
  total?: number;
}

const request = async (option: any): Promise<IResponse> => {
  const response = await Taro.request(option);
  
  if(response.statusCode !== 200){
    const msg = '服务异常';

    return {
      code: 500,
      data: null,
      msg,
      success: false
    }
  }
  return response.data;
}

export const get = async (api: string, data: any, option?: any): Promise<IResponse>  => {
  return request( {url: `${baseUrl}${api}`, data,method: 'GET',...option});
}

export const post = async (api: string, data: any, option?: any): Promise<IResponse> => {
  return request( {url: `${baseUrl}${api}`, data,method: 'POST',...option});
}