/**
 * v-has 自定义权限处理
 */

import { useUserStore } from '@/stores/user'

export default {
    mounted(el, binding, vnode) {

        const userStore = useUserStore();

        var { value } = binding;

        const R = /R\((.*?)\)/g;
        const Rs = value.match(R) || [];

        const P = /P\((.*?)\)/g;
        const Ps = value.match(P) || [];

        for (let i = 0; i < Rs.length; i ++){
            const hasRole = userStore.roles.some(role => {
                return Rs[i] === `R(${role})`;
            })

            value = hasRole ? value.replace(Rs[i], 'true') : value.replace(Rs[i], 'false');
        }

        for (let i = 0; i < Ps.length; i ++){
            const hasPermi = userStore.permissions.some(permission => {
                return Ps[i] === `P(${permission})`;
            })

            value = hasPermi ? value.replace(Ps[i], 'true') : value.replace(Ps[i], 'false');
        }
        
        if (!eval(value)){
            el.parentNode && el.parentNode.removeChild(el);
        }

    }
}