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
                        <a href="https://www.instagram.com/diamond_gta5/" target="_blank" rel="noreferrer" className={styles.instagram}></a><a href="https://discord.gg/2vJvxrgBQa" target="_blank" rel="noreferrer"  className={styles.discorde}></a><a href="https://twitter.com/MediaDiamondRp" target="_blank" rel="noreferrer"  className={styles.twitter}></a><a href="https://www.youtube.com/channel/UCpbZuE_eztSTsQ717tyuXNA" target="_blank" rel="noreferrer"  className={styles.youtube}></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;