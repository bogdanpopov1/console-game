import React from 'react'
import { Link } from 'react-router-dom'
import styles from './SubForm.module.css'

export function SubForm() {
    return (
        <>
            <div className={styles.sub}>
                <div className='container'>
                    <div className={styles.main}>
                        <div className={styles.info}>
                            <h1>Подпишись на рассылку и узнавай о новостях и акциях первым!</h1>

                            <div className={styles.input__button}>
                                <input type="email" placeholder='Введите email' />
                                <button>Подписаться на рассылку</button>
                                <p>Нажимая «Подписаться на рассылку», я даю согласие на получение рекламной рассылки и обработку <Link><span>персональных данных</span></Link></p>
                            </div>
                        </div>
                        <img src='/images/sub/email.png' alt="Картинка" />
                    </div>
                </div>
            </div>
        </>
    )
}