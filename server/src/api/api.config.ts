import * as qs from "qs";
import { PathLike } from "fs";

export const apiConfig = {
    returnRejectedPromiseOnError: true,
    withCredentials: true,
    timeout: 30000,
    // baseURL: "http://remote.rapidcashatm.ca:9001",
    baseURL: process.env.API_BASE_URL,
    headers: {
      common: {
        "Cache-Control": "no-cache, no-store, must-revalidate",
        Pragma: "no-cache",
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    },
    paramsSerializer: (params: PathLike) => qs.stringify(params, { indices: false }),
}
