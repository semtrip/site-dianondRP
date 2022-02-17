import '../styles/globals.scss'
import '../styles/media.scss'

import mainStore from '../store/main.store';
import accountStore from '../store/account.store';
import {useEffect} from 'react'
import { getCookie } from 'cookies-next';
import { observer } from "mobx-react-lite";


const MyApp = observer(({ Component, pageProps}) => {
  useEffect(() => {
    if(getCookie('user') !== undefined) {
      const user = getCookie('user')
      loginUser(user)
    }
  });
  const loginUser = async (user) => {
      const responce = await fetch("/api/getUser", {
          method: 'POST',
          body: JSON.stringify({user}),
          headers: {
              'Content-Type': 'application/json'
          }
      })
        const data = await responce.json()
        if (data.status === 403) {
          mainStore.isLogin = false
        } else if(data.status === 200) {
             mainStore.isLogin = true
            accountStore.account = data.user
            mainStore.userLogin = data.user.login
            if (data.character !== undefined) { {
              accountStore.сharacter = data.character
              for (let index = 0; index < data.character.length; index++) {
                  if (data.character[index].business_id > 0) {
                    getBusiness(data.character[index].business_id)
                  } else {
                    accountStore.business.push(null)
                  }         
              }
            }
        }
      }
}
const getBusiness = async (businessId) => {
  const responce = await fetch("/api/getBusiness", {
      method: 'POST',
      body: JSON.stringify({businessId}),
      headers: {
          'Content-Type': 'application/json'
      }
  })
    const data = await responce.json()
    if (data.status === 403) {
      return
    } 
    if (data.status === 200) {
      accountStore.business.push(data.business)
  }
}
  return <Component {...pageProps} />
})

export default MyApp


