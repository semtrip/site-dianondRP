import styles from '../styles/Home.module.scss'

import Header from '../components/header.module'

export default function Top() {
  return (
    <div className='container'>
      <Header title='Top'/>
      <main className={styles.main}>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
