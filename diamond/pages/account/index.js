import Header from '../../components/header.module'
import Footer from '../../components/footer.module'

import styles from '../../styles/Account.module.scss'

import { getCookie } from 'cookies-next';

import {useEffect, useState, Suspense} from "react"
import { useRouter } from 'next/router';
import { observer } from "mobx-react-lite";
import accountStore from '../../store/account.store';

const Account = observer(() => {
    const router = useRouter();
    const character = accountStore.сharacter
    const business = accountStore.business
    const fraction = [
      'Not fraction',
      'Goverment',
      'LSPD',
      'FIB',
      'Army San-Andreas',
      'Sheriff Department',
      'EMS',
      'Life Invader'
    ]
    const [characterId, setCharacterId] = useState(0);
    useEffect(() => {
        if(getCookie('user') === undefined) {
            router.push({pathname: '/auth'})
        }
    });
    const get_current_date = (data) => {
      let date = new Date(data * 1000)
      let year = date.getFullYear()
      let month = date.getMonth()
      let day = date.getDate()
      let currentDate = day + '.' + (month +1) + '.' + year
      return currentDate
    }
    const get_current_age =(date) => {
      var d = date.split('.');
      if( typeof d[2] !== "undefined" ) {
          date = d[2]+'.'+d[1]+'.'+d[0];
          return ((new Date().getTime() - new Date(date)) / (24 * 3600 * 365.25 * 1000)) | 0;
      }
      return 0;
    }
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'decimal'    
    });

    return (
      <>
        <Header title='Account'/>
        {
          accountStore.сharacter.length > 0 ?
          <main>
              <div className={styles.account}>
                <div className="container">
                  <div className={styles.nav_character}>
                    {
                      character[0] !== undefined ?
                      <div className={JSON.parse(character[0].skin).SKIN_SEX > 0 ? `${styles.link_character} ${styles.active}` : `${styles.link_character}`} onClick={()=>{setCharacterId(0)}}>
                          <span className={styles.name}>{character[0].name}</span>
                          <span className={styles.time}>{character[0].online_time < 60 ? character[0].online_time + ' m' : Math.round(character[0].online_time/60) + ' h'}</span>
                          <span className={styles.fraction}>{fraction[character[0].fraction_id]}</span>
                      </div> : <div className={styles.notCharacter} />

                    }
                    {
                      character[1] !== undefined ?
                      <div className={JSON.parse(character[1].skin).SKIN_SEX > 0 ? `${styles.link_character} ${styles.active}` : `${styles.link_character}`} onClick={()=>{setCharacterId(1)}}>
                          <span className={styles.name}>{character[1].name}</span>
                          <span className={styles.time}>{character[1].online_time < 60 ? character[1].online_time + ' m' : Math.round(character[1].online_time/60) + ' h'}</span>
                          <span className={styles.fraction}>{fraction[character[1].fraction_id]}</span>
                      </div> : <div className={styles.notCharacter} />
                    }
                    {
                      character[2] !== undefined ?
                      <div className={JSON.parse(character[2].skin).SKIN_SEX > 0 ? `${styles.link_character} ${styles.active}` : `${styles.link_character}`} onClick={()=>{setCharacterId(2)}}>
                          <span className={styles.name}>{character[2].name}</span>
                          <span className={styles.time}>{character[2].online_time < 60 ? character[2].online_time + ' m' : Math.round(character[2].online_time/60) + ' h'}</span>
                          <span className={styles.fraction}>{fraction[character[2].fraction_id]}</span>
                      </div> : <div className={styles.notCharacter} />
                    }
                  </div>
                  <div className={styles.info_character}>
                      <div className={styles.name}>
                      {character[characterId].name} 
                      {
                        character[characterId].is_online > 0 ? 
                        <div className={styles.status}>Online</div> 
                        : 
                        <div className={`${styles.status} ${styles.active}`}>Offline</div>
                      }
                      </div>
                      <div className={styles.columns}>
                          <div className={styles.text}>
                            <span className={styles.time}>{character[characterId].online_time < 60 ? character[characterId].online_time + ' m' : Math.round(character[characterId].online_time/60) + ' h'}</span>
                            <span className={styles.fraction}>{fraction[character[characterId].fraction_id]}</span>
                          </div>
                          <div className={styles.text}>
                            <span className={styles.age}>{get_current_age(character[characterId].age)} years</span>
                            <span className={styles.sex}>{JSON.parse(character[characterId].skin).SKIN_SEX > 0 ? 'Female gender' : 'Male gender'}</span>
                          </div>
                          <div className={styles.text}>
                            <span className={styles.vip}>{character[characterId].vip_type > 0 ? 'VIP status' : 'VIP is missing'}</span>
                            <span className={styles.date}>The account was created - {get_current_date(character[characterId].reg_timestamp)}</span>
                          </div>
                      </div>
                  </div>
                  <div className={styles.box_info_character}>
                      <div className={styles.car}></div>
                      { 
                        character[characterId].business_id > 0 ?
                        <>
                        {console.log(business[1])}
                        <div className={styles.bussines}>
                          <span className={styles.title_box}>Bussines</span>
                          <div className={styles.box}>
                            <span className={styles.name}>{business[characterId].name}</span>
                            <ico/>
                            <div className={styles.info}>
                              <span>Account status<b>{formatter.format(business[characterId].bank)}$</b></span>
                              <span>State price:<b>{formatter.format(business[characterId].price)}$</b></span>
                            </div>
                          </div>
                        </div>
                        </>:null
                      }
                      <div className={styles.money}>
                        <span className={styles.title_box}>Status of accounts</span>
                        <div className={styles.box}>
                            <span className={styles.name}></span>
                            <div className={styles.info}>
                              <span>In the bank:<b>In the bank{1}$</b></span>
                              <span>Cash:<b>{1}$</b></span>
                            </div>
                        </div>  
                      </div>
                      <div className={styles.warehouse}>
                        <span className={styles.title_box}>Warehouse</span>
                        <div className={styles.box}>
                            <span className={styles.name}>Warehouse #221</span>
                            <ico/>
                            <div className={styles.info}>
                              <span>Address<b>Бульвар Алгонквин</b></span>
                              <span>State price:<b>13.000.000$</b></span>
                            </div>
                        </div>
                      </div>
                      <div className={styles.house}>
                        <span className={styles.title_box}>House</span>
                        <div className={styles.box}>
                            <span className={styles.name}>House #221</span>
                            <ico/>
                            <div className={styles.info}>
                              <span>Address<b>Бульвар Алгонквин</b></span>
                              <span>State price:<b>13.000.000$</b></span>
                            </div>
                        </div>
                      </div>
                  </div>
                </div>
              </div>
        </main> : <div>Loading...</div>
        }
        <Footer />    
    </>
    )
  })
  export default Account