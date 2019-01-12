import request from '../utils/request';

//表格请求数据

//GET
export async function getList(url) {
    return request(`${url}?location=北京&output=json&ak=lsTdWpHKKx2j4m1LhfDDXUgW`);
}

//POST
// export async function getList(url,params) {
//     return request(url, {
//         method: 'POST',
//         body: {
//             ...params,
//         },
//     });
// }