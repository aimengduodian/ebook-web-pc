/*
* 封装Cookie操作， 存、取、删、检查
* */

let cookie = {
    /**
     * set存储方法
     * @ param {String}  key键
     * @ param {String}  value值
     * @ param {Number}  过期时间，单位是天
     * */
    set(key, value, expires, path, domain, secure) {
        let cookieText = "";
        expires = expires * 1000 * 60 * 60 * 24;
        let expires_date = new Date(new Date().getTime() + expires);
        cookieText += encodeURIComponent(key) + "=" + encodeURIComponent(value);
        if (expires) {
            cookieText += "; expires=" + expires_date.toGMTString();
        }
        if (path) {
            cookieText += "; path=" + path;
        }
        if (domain) {
            cookieText += "; domain=" + domain;
        }
        if (secure) {
            cookieText += "; secure";
        }
        document.cookie = cookieText;
    },
    /**
     * get取值方法
     * @ param {String}  key键
     * */
    get(key) {
        let cookieName = encodeURIComponent(key) + "=";
        let cookieStart = document.cookie.indexOf(cookieName);
        let cookieValue = "";
        if (cookieStart > -1) {
            let cookieEnd = document.cookie.indexOf(";", cookieStart);
            if (Number(cookieEnd) === -1) {
                cookieEnd = document.cookie.length;
            }
            cookieValue = decodeURIComponent(
                document.cookie.substring(cookieStart + cookieName.length, cookieEnd)
            );
        }
        return cookieValue;
    },
    /**
     * remove删除数据
     * @ param {String}  key键
     * */
    remove(key) {
        this.setCookie(key, "", -1);
    },
    /**
     * check删除数据
     * @ param {String}  key键
     * */
    check(key) {
        let value = this.getCookie(key);
        if (value === "" || value == null) {
            return false;
        } else {
            return true;
        }
    }
};

// 暴露给外部访问
export default storage
