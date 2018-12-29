import http from './../http/http.js';

export function folderTreeList() {
    return http({
        method: "get",
        url: "/core-service/folderTree/folderTreeList",
    })
}