import Header from '../../components/header.module'
import Footer from '../../components/footer.module'

import { getCookie } from 'cookies-next';

import {useEffect} from "react"
import { useRouter } from 'next/router';

export default function Account() {
    const router = useRouter();
    useEffect(() => {
        if(getCookie('user') === undefined) {
            router.push({pathname: '/auth'})
        }
      });
  
    return <>
        <Header title='Account'/>
            
        <Footer />
    </>
  }