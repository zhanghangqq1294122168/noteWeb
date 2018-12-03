import http from './../http/http.js';

export function saveArticle(data) {
    return http({
        method: "post",
        url: "/article/save",
        data: data
    })
}

export function imgPost(data) {
    return http({
        method: "post",
        url: "/upload",
        data: data
    })
}

