import CryptoJS from "crypto-js";
const secret = "__SAOFENG__";
export const encrypt = (data: any) => {
    const dataStr = JSON.stringify(data);
    return CryptoJS.AES.encrypt(dataStr, secret).toString();
};
export const decrypt = (data: any) => {
    const str = CryptoJS.AES.decrypt(data, secret).toString(CryptoJS.enc.Utf8);
    if (str) {
        return JSON.parse(str);
    }
    return null;
};
