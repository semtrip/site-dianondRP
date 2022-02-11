import { makeAutoObservable } from "mobx"

class AccountStore {
    constructor() {
        makeAutoObservable(this, {}, { deep: true })
    }
    account = []
    сharacter = []
}
export default new AccountStore()