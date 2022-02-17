import { makeAutoObservable } from "mobx"

class AccountStore {
    constructor() {
        makeAutoObservable(this, {}, { deep: true })
    }
    account = []
    сharacter = []
    business = []
    cars = []
    house = []
    warehouse = []
}
export default new AccountStore()