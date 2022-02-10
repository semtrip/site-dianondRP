import '../styles/globals.scss'
import '../styles/media.scss'

import mainStore from '../store/main.store';
import {useEffect} from 'react'
import { getCookie } from 'cookies-next';
import { observer } from "mobx-react-lite";

const MyApp = observer(({ Component, pageProps}) => {
  useEffect(() => {
    if(getCookie('user') !== undefined) {
      mainStore.isLogin = true
      mainStore.userLogin = getCookie('user')
    }
  });
  return <Component {...pageProps} />
})

export default MyApp
