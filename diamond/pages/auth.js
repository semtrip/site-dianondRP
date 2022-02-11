import Header from '../components/header.module'
import Footer from '../components/footer.module'

import { getCookie } from 'cookies-next';

import { useRouter } from 'next/router';

import Link from 'next/link';

import styles from '../styles/Auth.module.scss'
import {useState, useEffect} from 'react';



export default function Auth() {
    const router = useRouter();
    const [remember, setRemeber] = useState(false);
    const [error, setError] = useState('');
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        if(getCookie('user') !== undefined) {
            router.push({pathname: '/account'})
        }
      });

    const loginUser = async () => {
        setError('')
        if (login.length > 0 && password.length > 0) {
            const responce = await fetch("/api/auth", {
                method: 'POST',
                body: JSON.stringify({login, password}),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const data = await responce.json()
            if (data.status === 401) {
                setError(data.message)
            } else if (data.status === 200) {
                router.push({pathname: '/account'})
            }
        }

    }
    return (
        <>
        <Header title='Authorization'/>
        <div className="container">
            <div className={styles.auth}>
                <span className={styles.title}>Authorization</span>
                <div className={styles.inputs_box}>
                    <div className={styles.inputs}>
                        <div className={styles.input}>
                            <input type="text" maxLength={100} placeholder='Enter your username...' onChange={(e) => setLogin(e.currentTarget.value)}/>
                        </div>
                        <div className={styles.input}>
                            <input type="password" maxLength={100} placeholder='Enter the password...'  onChange={(e) => setPassword(e.currentTarget.value)}/>
                        </div>
                    </div>
                    <div className={styles.switches}>
                            <div className={styles.remember}>
                                <div className={`${styles.checkbox} ${remember ? styles.active : null}`} onClick={()=>{setRemeber(!remember)}}/>
                                <span>Remember the password</span>
                            </div>
                            <Link rel="stylesheet" href="/"><a>Forgot your password?</a></Link>
                    </div>
                    <div className={styles.btn} onClick={loginUser}>Log in to your account</div>
                    <span className={styles.error}>{error}</span>
                    
                </div>
            </div>
        </div>
        <Footer />
        </> 
    )
}