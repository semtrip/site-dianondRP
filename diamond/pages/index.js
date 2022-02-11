import styles from '../styles/Home.module.scss'
import Header from '../components/header.module'
import Footer from '../components/footer.module'
import Link from 'next/link'

export default function Home() {
  const style = {
      img1 : {
        'margin-top': '12px'
      },
      img2: {
        'margin-top': '33px'
      },
      img3: {
        'margin-top': '26px'
      }
  }
  return (
    <>      
      <Header title='Home'/>
        <main>
          <div className="container">
          <div className={styles.main}>
              <img src="img/logo328.png" className={styles.logo} alt="diamond-gta5.com_logo" />
              <p className={styles.descriptor}>
                The server is developed on the RAGE Multiplayer platform, which
                makes it possible to play the chosen role in the virtual universe, obeying
                the rules of real life. Become a politician, a bandit, a businessman, a taxi driver,
                a factory worker, a policeman, in general - anyone.
              </p>
              <div className={styles.btns}>
                  <a href="#start">
                    <div className={styles.btn}>
                    <ico className={styles.play}/>
                      Start playing
                    </div>
                  </a>
                  <a href="#about_us">
                    <div className={styles.btn} id='about_btn'>
                      <ico className={styles.screen}/>
                      Learn more about us
                    </div>
                  </a>
              </div>
              <div className={styles.advantages}>
                <div className={`${styles.item} ${styles.star}`}>
                <div className={styles.text}>
                  <span>Unique game mod</span>
                  <span className={styles.white}>Created especially for you!</span>
                </div>
                </div>
                <div className={`${styles.item} ${styles.map}`}>
                  <div className={styles.text}>
                    <span>Beautiful landscapes</span>
                    <span className={styles.white}>Which you won`t find anywhere!!</span>
                  </div>
                </div>
                <div className={`${styles.item} ${styles.orden}`}>
                  <div className={styles.text}>
                    <span>Interesting quest line</span>
                    <span className={styles.white}>You can learn a lot of new things!</span>
                  </div>
                </div>
                <div className={`${styles.item} ${styles.stats}`}>
                  <div className={styles.text}>
                    <span>Rapid career growth</span>
                    <span className={styles.white}>Easy character leveling!</span>
                  </div>
                </div>
              </div>
              <div className={styles.online_block}>

              </div>
            </div>
          </div>
          <div className="container">
          <div className={styles.about_us} id='about_us'>
                <span className={styles.title}>About us</span>
                <div className={styles.item}>
                  <span className={styles.number}>01</span>
                  <div className={styles.text}>
                    <span>All about our project</span>
                    <span className={styles.white}>You can watch a video clip about our project where everything is described in great detail!</span>
                  </div>
                </div>
                <div className={styles.item}>
                  <span className={styles.number}>02</span>
                  <div className={styles.text}>
                    <span>Approach to players</span>
                    <span className={styles.white}>You can watch a video clip about our project where everything is described in great detail!</span>
                  </div>
                </div>
                <div className={styles.item}>
                  <span className={styles.number}>03</span>
                  <div className={styles.text}>
                    <span>Game mod</span>
                    <span className={styles.white}>You can watch a video clip about our project where everything is described in great detail!</span>
                  </div>
                </div>
                <div className={styles.item}>
                  <span className={styles.number}>04</span>
                  <div className={styles.text}>
                    <span>Atmosphere</span>
                    <span className={styles.white}>You can watch a video clip about our project where everything is described in great detail!</span>
                  </div>
                </div>
            </div>
          </div>
          <div className={styles.start} id='start'>
            <div className="container">
              <div className={styles.start_content}>
              <span className={styles.title}>HOW TO START PLAYING</span>
                  <div className={styles.items}>
                    <div className={styles.item}>
                      <div className={styles.block}>
                        <img src="img/gta5.png" alt="gta5" style={style.img1}/>
                        <h2>Install GTA V</h2>
                        <p>You need to install a licensed GTA V on your computer<br/><br/>After that, follow the next step!</p>
                      </div>
                      <a href='https://store.steampowered.com/app/271590/Grand_Theft_Auto_V/' target="_blank" rel="noreferrer" className={styles.btn}><ico className={styles.shop}/>Purchase the game</a>
                    </div>
                    <div className={styles.item}>
                      <div className={styles.block}>
                        <img src="img/rage.png" alt="gta5" style={style.img2}/>
                        <h2>Install RAGE:MP</h2>
                        <p>You need to install<br/>RAGE:MP on your computer<br/>To download follow the link:</p>
                        <a href="https://rage.mp/" target="_blank" rel="noreferrer">rage.mp</a>
                      </div>
                      <a href='https://cdn.rage.mp/public/files/RAGEMultiplayer_Setup.exe' className={styles.btn}><ico className={styles.download}/>Download RAGE:MP</a>
                    </div>
                    <div className={styles.item}>
                      <div className={styles.block}>
                        <img src="img/logo_small.png" alt="gta5" style={style.img3}/>
                        <h2 className={styles.mg_small}>Connect to the server</h2>
                        <p>Choose a server for the game, then log in to it and create an account.</p>
                      </div>
                      <a href='rage://blue.diamond-gta5.com:22005' className={styles.btn}><ico className={styles.connect}/>Connect to the server</a>
                    </div>
                </div>
            </div>
            </div>
            <div className={styles.peds}/>
          </div>
          <div className={styles.news_project}>
            <div className="container">
              <div className={styles.content}>
                <span className={styles.title}>PROJECT NEWS</span>
                <div className={styles.items}>
                  <div className={styles.item}>
                    <img src="img/news_defaut.png" alt="diamond-gta5.com news" />
                    <div className="text">
                      <h2>Новый функционал</h2>
                      <p>Обновление 1.0v, новые возможности персонажа, а именно постройка своего снеговика с помощью снега!</p>
                    </div>
                    <Link href={'/'}>
                      <a>More detailed</a>
                    </Link>
                  </div>
                  <div className={`${styles.item} ${styles.small}`}>
                    <img src="img/news_defaut.png" alt="diamond-gta5.com news" />
                    <div className="text">
                      <h2>Новый функционал</h2>
                      <p>Обновление 1.0v, новые возможности персонажа, а именно постройка своего снеговика с помощью снега! Обновление 1.0v, новые возможности персонажа, а именно постройка своего снеговика с помощью снега! Обновление 1.0v, новые возможности персонажа, а именно постройка своего снеговика с помощью снега! Обновление 1.0v, новые возможности персонажа, а именно постройка своего снеговика с помощью снега! </p>
                    </div>
                    <Link href={'/'}>
                      <a>More detailed</a>
                    </Link>
                  </div>
                  <div className={styles.item}>
                    <img src="img/news_defaut.png" alt="diamond-gta5.com news" />
                    <div className="text">
                      <h2>Новый функционал</h2>
                      <p>Обновление 1.0v, новые возможности персонажа, а именно постройка своего снеговика с помощью снега!</p>
                    </div>
                    <Link href={'/'}>
                      <a>More detailed</a>
                    </Link>
                  </div>
                </div>  
              </div>
            </div>
          </div>
          <div className={styles.monitoring}>
            <div className="container">
              <div className={styles.content}>
              <span className={styles.title}>MONITORING</span>
              <div className={styles.items}>
                <div className={styles.item}>
                  <div className={styles.block}>
                    <span className={styles.number}>01</span>
                    <div className={styles.online}>
                      <ico/>
                      <div className={styles.text}>
                        <span>1300 out of 5000</span>
                        <div className={styles.line}>
                          <div className={styles.process}></div>
                        </div>
                      </div>
                    </div>
                    <a href='rage://blue.diamond-gta5.com:22005' className={styles.address}>IP: blue.diamond-gta5.com</a>
                  </div>
                </div>
                <div className={styles.item}>
                  <div className={styles.block}>
                    <span className={styles.number}>01</span>
                    <div className={styles.online}>
                      <ico/>
                      <div className={styles.text}>
                        <span>1300 out of 5000</span>
                        <div className={styles.line}>
                          <div className={styles.process}></div>
                        </div>
                      </div>
                    </div>
                    <a href='rage://blue.diamond-gta5.com:22005' className={styles.address}>IP: blue.diamond-gta5.com</a>
                  </div>
                </div>
                <div className={styles.item}>
                  <div className={styles.block}>
                    <span className={styles.number}>01</span>
                    <div className={styles.online}>
                      <ico/>
                      <div className={styles.text}>
                        <span>1300 out of 5000</span>
                        <div className={styles.line}>
                          <div className={styles.process}></div>
                        </div>
                      </div>
                    </div>
                    <a href='rage://blue.diamond-gta5.com:22005' className={styles.address}>IP: blue.diamond-gta5.com</a>
                  </div>
                </div>
                <div className={styles.item}>
                  <div className={styles.block}>
                    <span className={styles.number}>01</span>
                    <div className={styles.online}>
                      <ico/>
                      <div className={styles.text}>
                        <span>1300 out of 5000</span>
                        <div className={styles.line}>
                          <div className={styles.process}></div>
                        </div>
                      </div>
                    </div>
                    <a href='rage://blue.diamond-gta5.com:22005' className={styles.address}>IP: blue.diamond-gta5.com</a>
                  </div>
                </div>
                <div className={styles.item}>
                  <div className={styles.block}>
                    <span className={styles.number}>01</span>
                    <div className={styles.online}>
                      <ico/>
                      <div className={styles.text}>
                        <span>1300 out of 5000</span>
                        <div className={styles.line}>
                          <div className={styles.process}></div>
                        </div>
                      </div>
                    </div>
                    <a href='rage://blue.diamond-gta5.com:22005' className={styles.address}>IP: blue.diamond-gta5.com</a>
                  </div>
                </div>
                <div className={styles.item}>
                  <div className={styles.block}>
                    <span className={styles.number}>01</span>
                    <div className={styles.online}>
                      <ico/>
                      <div className={styles.text}>
                        <span>1300 out of 5000</span>
                        <div className={styles.line}>
                          <div className={styles.process}></div>
                        </div>
                      </div>
                    </div>
                    <a href='rage://blue.diamond-gta5.com:22005' className={styles.address}>IP: blue.diamond-gta5.com</a>
                  </div>
                </div>
                <div className={styles.item}>
                  <div className={styles.block}>
                    <span className={styles.number}>01</span>
                    <div className={styles.online}>
                      <ico/>
                      <div className={styles.text}>
                        <span>1300 out of 5000</span>
                        <div className={styles.line}>
                          <div className={styles.process}></div>
                        </div>
                      </div>
                    </div>
                    <a href='rage://blue.diamond-gta5.com:22005' className={styles.address}>IP: blue.diamond-gta5.com</a>
                  </div>
                </div>
                <div className={styles.item}>
                  <div className={styles.block}>
                    <span className={styles.number}>01</span>
                    <div className={styles.online}>
                      <ico/>
                      <div className={styles.text}>
                        <span>1300 out of 5000</span>
                        <div className={styles.line}>
                          <div className={styles.process}></div>
                        </div>
                      </div>
                    </div>
                    <a href='rage://blue.diamond-gta5.com:22005' className={styles.address}>IP: blue.diamond-gta5.com</a>
                  </div>
                </div>
              </div>  
              </div>
            </div>  
          </div>
        </main>
      <Footer/>
    </> 
  )
}
