import { defineStore } from 'pinia'
import defaultSetting from '@/settings'

export const useSettingStore = defineStore({
    id: 'setting',
    state: () => ({
        title: defaultSetting.title,
        isDynamicTitle: defaultSetting.isDynamicTitle,
        isNavBar: defaultSetting.isNavBar,
    }),
    actions: {
        setTitle: function (title) {
            if (this.isDynamicTitle){
                this.title = defaultSetting.title + ' - ' + title;
            }else{
                this.title = defaultSetting.title;
            }
            document.title = this.title;
        }
    }
});