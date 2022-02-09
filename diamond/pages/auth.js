import Header from '../components/header.module'
import Footer from '../components/footer.module'

import Link from 'next/link';

import styles from '../styles/Auth.module.scss'
import {useState} from 'react';

import fetchJson from './../lib/fetchJson'




export default function Auth() {
    const [remember, setRemeber] = useState(false);
    const [error, setError] = useState('');
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');


    

    async function signIn (body = {login: login, password: password}) {
        console.log('fetch')
        try {

              await fetchJson('/api/users', {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body),
              })
          } catch (error) {
            if (error) {
                console.log(error)
            } else {
              console.error('An unexpected error happened:', error)
            }
          }
        if (login.length > 0 && password.length > 0) {
            console.log('fetch 2')
            if (login.targen.value !== '' && password.target.value !== '') {
                console.log('fetch 3')
                try {
                    await fetchJson('/api/users', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(body),
                      })
                  } catch (error) {
                    if (error) {
                        setError(error.data.message)
                    } else {
                      console.error('An unexpected error happened:', error)
                    }
                  }
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
                            <input type="text" maxLength={100} placeholder='Enter your username...' onChange={()=>{setLogin.bind(this)}}/>
                            {login !== '' ? login.targen.value :null}
                        </div>
                        <div className={styles.input}>
                            <input type="password" maxLength={100} placeholder='Enter the password...'  onChange={()=>{setPassword.bind(this)}}/>
                        </div>
                    </div>
                    <div className={styles.switches}>
                            <div className={styles.remember}>
                                <div className={`${styles.checkbox} ${remember ? styles.active : null}`} onClick={()=>{setRemeber(!remember)}}/>
                                <span>Remember the password</span>
                            </div>
                            <Link rel="stylesheet" href="/"><a>Forgot your password?</a></Link>
                    </div>
                    <div className={styles.btn} onClick={signIn}>Log in to your account</div>
                </div>
            </div>
        </div>
        <Footer />
        </> 
    )
}