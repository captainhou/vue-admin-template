import Vue from "vue";
import VueCookies from "vue-cookies";

Vue.use(VueCookies);

export function getCookies(cookieName){
    if(window.localStorage){
        return getLocalStorage(cookieName)
    }else{
        return VueCookies.get(cookieName)
    }
}

export function setCookies(c_name, value, expiredays) {
    let exdate = new Date();
    if (!expiredays) {
        expiredays = 30
    }
    exdate.setDate(exdate.getDate() + expiredays);
    if (!window.localStorage) {
        VueCookies.set(c_name, value, exdate)
    } else {
        //主逻辑业务
        setLocalStorage(c_name, value, exdate)
    }

}


export function getLocalStorage(cookieName){
    let storage = window.localStorage;
    let timeStr = storage.getItem(cookieName)
    if(timeStr){
        let timeObj = JSON.parse(timeStr)
        if(timeObj && timeObj.expireDays && timeObj.expireDays - (new Date().getTime()) >= 0 ){
            return timeObj.value
        }
    }
    storage.removeItem(cookieName)
    return null;
}

export function setLocalStorage(cookieName, value ,expireDays){
    let storage = window.localStorage;
    let timeObj = {
        value: value,
        expireDays: expireDays.getTime()
    };
    storage.setItem(cookieName, JSON.stringify(timeObj))
}

export function delCookies(name){
    let storage = window.localStorage;
    if(storage){
        storage.removeItem(name);
    }else{
        VueCookies.remove(name)
    }

}
