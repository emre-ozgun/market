/* eslint-disable no-async-promise-executor */
import axios, { AxiosInstance, AxiosResponse } from "axios";
import AppConfig from "../../environments/app";

class ProxyService {
  private service: AxiosInstance;

  constructor() {
    this.service = axios.create({
      baseURL: AppConfig.apiUrl,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    });
    this.service.interceptors.response.use(this.handleSuccess, this.handleError);
  }

  private handleSuccess = (response: AxiosResponse) => {
    return response.data;
  }

  private handleError = (error: any) => {
    if (error.response && error.response.status === 400) {
      if (error.response.data && error.response.data.code) {
        console.log("Bad Request", error.response.data.code);
      } else {
        console.log("Eksik Parametre");
      }
    }
    else {
      if (error.response && error.response.data && error.response.data.code) {
        console.log(error.response.data.code);
      } else {
        console.log("Beklenmeyen bir hata oluştu");
        console.warn(error);
      }
    }
    return Promise.reject({
      ...error,
      data: error.response.data,
      status: error.response.status
    });
  }


  get = (url: string): any => {
    return this.service.get(url);
  }

  post = (url: string, body?: any): any => {
    return this.service.post(url, body);
  }

  put = (url: string, body: any): any => {
    return this.service.put(url, body);
  }

  delete = (url: string, body: any): any => {
    return this.service.delete(url, body);
  }
}

export default new ProxyService();
