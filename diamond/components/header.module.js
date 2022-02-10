import styles from '../styles/components/Header.module.scss'
import Link from 'next/link'
import {useRouter }from 'next/router'
import {useState, useEffect} from 'react'
import Head from 'next/head'
import { getCookie } from 'cookies-next';
import mainStore from '../store/main.store';
import { observer } from "mobx-react-lite";
const Header = observer((props) => {
    const router = useRouter()
    const [mobileMenu, setMobileMenu] = useState(false)
    const title = props.title

    useEffect(() => {
      });

    return (
        <>
            <Head>
                <title>{title} | Diamond GTA5RP</title>
                <meta name="description" content="Diamond is a project for a multiplayer version of GTA 5 on RAGE:MP multiplayer version 1.1. Having plunged into the gameplay on our server, you can try yourself in different game roles, be a police officer, the mayor of the city with all its infrastructure, or even go against the law and take the side of crime! A game close to real life, communication, new acquaintances, a lot of positive emotions" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="container">
                <div className={styles.header}>
                    <img src="img/logo.png" alt="" />
                    <div className={styles.nav}>
                        <Link href="/"><a className={ router.pathname === '/' ? styles.active :null} >Home</a></Link>
                        <Link href="/donate"><a className={ router.pathname === '/donate' ? styles.active :null}>Donate</a></Link>
                        <Link href="/rules"><a className={ router.pathname === '/rules' ? styles.active :null}>Rules</a></Link>
                        <Link href="/top"><a className={ router.pathname === '/top' ? styles.active :null}>Top</a></Link>
                    </div> 
                    {   mainStore.isLogin ?
                        <Link href="/account">
                            <div className={styles.btn_islogin}>
                                <div className={styles.text}>
                                    <span>{mainStore.userLogin}</span>
                                    <span className={styles.coin}>110 300 <b>DC</b></span>
                                </div>
                            </div>
                        </Link> 
                        :
                        <Link href="/auth"><div className={styles.btn}>Personal account</div></Link>
                        
                    }
                    <div className={styles.mobile_nav_btn} onClick={()=> {setMobileMenu(!mobileMenu)}}/>
                </div>
                <div className={mobileMenu ? styles.mobile_nav_active :styles.mobile_nav}>
                    <div className={styles.nav_mobile}>
                        <Link href="/"><a className={ router.pathname === '/' ? styles.active :null} >Home</a></Link>
                        <Link href="/donate"><a className={ router.pathname === '/donate' ? styles.active :null}>Donate</a></Link>
                        <Link href="/rules"><a className={ router.pathname === '/rules' ? styles.active :null}>Rules</a></Link>
                        <Link href="/top"><a className={ router.pathname === '/top' ? styles.active :null}>Top</a></Link>
                    </div>
                        <div className={styles.btn_mobile}/>
                </div>
            </div>
            
        </>
    )
})
export default Header