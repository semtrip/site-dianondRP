import { makeAutoObservable } from "mobx"

class MainStore {
    constructor() {
        makeAutoObservable(this, {}, { deep: true })
    }
    isLogin = false
    userLogin = ''
}
export default new MainStore()    