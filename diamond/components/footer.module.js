import styles from '../styles/components/Footer.module.scss'


const Footer = (props) => {
    return (
        <div className={styles.footer}>
            <div className="container">
                <div className={styles.footer_block}>
                    <img src="img/logo.png" alt="" />
                    <div className={styles.links}>
                        <div>
                            <span>Contact</span>
                            <a href="">admin@diamond-gta5.com</a><a href="">support@diamond-gta5.com</a>
                        </div>
                        <div>
                            <span>Important</span>
                            <a href="">How to start playing</a><a href="">Project News</a>
                        </div>
                        <div>
                            <span>For users</span>
                            <a href="">Privacy Statement</a><a href="">User Agreement</a>
                        </div>
                    </div>
                    <div className={styles.social}>
                        <a href="" className={styles.instagram}></a><a href="https://discord.gg/diamond-gta5" target="_blank" rel="noreferrer"  className={styles.discorde}></a><a href=""  className={styles.twitter}></a><a href=""  className={styles.youtube}></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;