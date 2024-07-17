import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { SubForm } from '../Components/SubForm'
import { AppContext } from '../context/AppContext'
import styles from './Cart.module.css'

export function Cart() {

    const [cartModal, setCartModal, cart, setCart, popup, setPopup, favorites, setFavorites] = useContext(AppContext)

    let res = cart.map((item) => {
        return (
            <div>

            </div>
        )
    })

    return (
        <>
            <div className='container'>
                <div className={styles.main}>
                    {console.log(cart)}
                    <div className={styles.path}>
                        <Link to={'/'}><p>Главная</p></Link>
                        <span>></span>
                        <Link to={'/cart'}><h4>Корзина</h4></Link>
                    </div>

                    <h1>Корзина</h1>

                    <div className={styles.info}>

                        <div className={styles.goods}>

                            <div className={styles.deleteSelected}>
                                <div className={styles.input}>
                                    <input type="checkbox" />
                                    <p>Выбрать все</p>
                                </div>
                                <span>Удалить выбранные</span>
                            </div>

                        </div>



                        <div className={styles.details}>
                            <h3>Детали заказа</h3>
                            <button>Перейти к оформлению</button>
                        </div>

                    </div>

                </div>
            </div>


        </>
    )
}