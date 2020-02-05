import request from "../utils/request";
import prefix from "./prefix.js";

export async function getLeftGetgoriesRequest() {
    return await request(prefix + "getFirstCatgories");
}

export async function getRightCatgoriesRequest() {
    return await request(prefix + "getSecondCatgories");
}
