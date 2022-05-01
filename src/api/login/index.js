import { useUserStore } from "@/stores/user";
import request from "@/utils/request";

// 模拟登陆，实际需要调用request进行登录请求
export function login(username, password) {
    return new Promise((resolve, reject) => {
        if (username == 'admin' && password == 'admin123') {
            resolve({
                code: 200,
                msg: '请求成功',
                token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJRUToyMzc5NzIxMTMiLCJuYW1lIjoiQ29kZXJfeGlhb3lpIiwiaWF0IjoxNTE2MjM5MDIyfQ._9vuvbB3NPfM3JC3i1PX0nNgnLhrodm8fj6AVd1GiEM'
            })
        } else if (username == 'user1' && password == 'user1') {
            resolve({
                code: 200,
                msg: '请求成功',
                token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJRUToyMzc5NzIxMTMiLCJuYW1lIjoidXNlcjAxIiwiaWF0IjoxNTE2MjM5MDIyfQ.7H5YJp0vmJym6cYp_pALEQEaj6pPZWVvea1vm8uIMJQ'
            })
        } else {
            reject('账号密码错误');
        }
    });
}

// 模拟请求用户信息，正常是需要经过后端校验token后判断登录用户再进行返回数据
export function getInfo(token) {
    const userStore = useUserStore();
    return new Promise((resolve, reject) => {
        if (token == 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJRUToyMzc5NzIxMTMiLCJuYW1lIjoiQ29kZXJfeGlhb3lpIiwiaWF0IjoxNTE2MjM5MDIyfQ._9vuvbB3NPfM3JC3i1PX0nNgnLhrodm8fj6AVd1GiEM') {
            resolve({
                code: 200,
                msg: '请求成功',
                data: {
                    userId: 1,
                    userName: 'Coder_xiaoyi',
                    nickName: '码农小易',
                    avatar: 'https://files.catbox.moe/zfaaqx.jpg',
                    permissions: ['*:*:*'],
                    roles: ['admin']
                }
            })
        } else if (token == 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJRUToyMzc5NzIxMTMiLCJuYW1lIjoidXNlcjAxIiwiaWF0IjoxNTE2MjM5MDIyfQ.7H5YJp0vmJym6cYp_pALEQEaj6pPZWVvea1vm8uIMJQ') {
            resolve({
                code: 200,
                msg: '请求成功',
                data: {
                    userId: 2,
                    userName: 'user1',
                    nickName: '用户1',
                    avatar: 'https://files.catbox.moe/zfaaqx.jpg',
                    permissions: ['test:list'],
                    roles: ['user1']
                }
            })
        } else {
            resolve({
                code: 403,
                msg: 'token已失效',
                data: {}
            })
        }

    });
}

// 模拟请求用户信息，正常是需要传入token后进行登出
export function logout(token) {
    return new Promise((resolve, reject) => {
        resolve({
            code: 200,
            msg: '退出成功'
        })
    });
}
