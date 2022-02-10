import { makeAutoObservable } from "mobx"

class AccountStore {
    constructor() {
        makeAutoObservable(this, {}, { deep: true })
    }
    
}
export default new AccountStore()