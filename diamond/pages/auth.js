import Header from '../components/header.module'
import Footer from '../components/footer.module'

import Link from 'next/link';

import styles from '../styles/Auth.module.scss'
import {useState} from 'react';


export default function Auth() {
    const [remember, setRemeber] = useState(false);
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
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
                            <Link rel="stylesheet" href=""><a>Forgot your password?</a></Link>
                    </div>
                    <div className={styles.btn}>Log in to your account</div>
                </div>
            </div>
        </div>
        <Footer />
        </> 
    )
}