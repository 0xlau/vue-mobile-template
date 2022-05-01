import router from "./router"
import { useUserStore } from "./stores/user"
import { useSettingStore } from "./stores/setting"
import { getToken } from "./utils/auth"


const whiteList = ['/login']

router.beforeEach((to, from, next) => {
    const userStore = useUserStore();
    const settingStore = useSettingStore();

    if (getToken()) {
        /* has token*/
        to.meta.title && settingStore.setTitle(to.meta.title);
        if (to.path === '/login') {
            next({ path: '/' })
        } else {
            if (userStore.userId == null) {
                // 判断当前用户是否已拉取完user_info信息
                userStore.GetInfo(getToken()).then(() => {
                    next({ ...to, replace: true })
                }).catch(err => {
                    userStore.LogOut().then(() => {
                        next({ path: '/' })
                    })
                })
            } else {
                next()
            }
        }
    } else {
        // 没有token
        if (whiteList.indexOf(to.path) !== -1) {
            // 在免登录白名单，直接进入
            next()
        } else {
            next(`/login`) // 否则全部重定向到登录页
        }
    }
})