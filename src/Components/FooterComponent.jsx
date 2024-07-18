import { Link } from 'react-router-dom'
import styles from './Footer.module.css'

export function FooterComponent() {
    return (
        <>
            <footer>
                <div className="container">
                    <div className={styles.footer}>

                        <div className={styles.logo}>
                            <Link to={"/"}>
                                <img src="/images/logo/logo.png" alt="Logo" />
                            </Link>
                            <button>Карта магазинов</button>
                        </div>

                        <hr />

                        <div className={styles.info__links}>
                            <div className={styles.nav}>
                                <div className={styles.section}>
                                    <h3>Покупателям</h3>
                                    <ul>
                                        <li><Link to={'/'}>Способы оплаты</Link></li>
                                        <li><Link to={'/'}>Подарочные карты</Link></li>
                                        <li><Link to={'/'}>Доставка</Link></li>
                                        <li><Link to={'/'}>Статус заказа</Link></li>
                                        <li><Link to={'/'}>Обмен и возврат</Link></li>
                                        <li><Link to={'/'}>Акции и скидки</Link></li>
                                        <li><Link to={'/'}>Вопросы и ответы</Link></li>
                                        <li><Link to={'/'}>Поддержка клиентов</Link></li>
                                    </ul>
                                </div>

                                <div className={styles.section}>
                                    <h3>О компании</h3>
                                    <ul>
                                        <li><Link to={'/'}>Партнерская программа</Link></li>
                                        <li><Link to={'/'}>Новости</Link></li>
                                        <li><Link to={'/'}>Политика конфиденциальности</Link></li>
                                        <li><Link to={'/'}>Сервисные центры</Link></li>
                                        <li><Link to={'/'}>Персональные данные</Link></li>
                                    </ul>
                                </div>
                            </div>

                            <div className={styles.social}>
                                <h3>Наши соцсети</h3>

                                <div className={styles.icons}>
                                    <svg width="61" height="60" viewBox="0 0 61 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M30.1999 0C13.6312 0 0.199951 13.4312 0.199951 30C0.199951 46.5687 13.6312 60 30.1999 60C46.7687 60 60.1999 46.5687 60.1999 30C60.1999 13.4312 46.7687 0 30.1999 0ZM41.7374 33.8469C41.7374 33.8469 44.3906 36.4656 45.0437 37.6812C45.0625 37.7062 45.0718 37.7312 45.0781 37.7437C45.3437 38.1906 45.4062 38.5375 45.275 38.7969C45.0562 39.2281 44.3062 39.4406 44.0499 39.4594H39.3624C39.0374 39.4594 38.3562 39.375 37.5312 38.8062C36.8968 38.3625 36.2718 37.6344 35.6624 36.925C34.7531 35.8687 33.9656 34.9562 33.1718 34.9562C33.071 34.9561 32.9708 34.9719 32.875 35.0031C32.2749 35.1969 31.5062 36.0531 31.5062 38.3344C31.5062 39.0469 30.9437 39.4562 30.5468 39.4562H28.4C27.6687 39.4562 23.8593 39.2 20.4843 35.6406C16.3531 31.2812 12.6343 22.5375 12.6031 22.4562C12.3687 21.8906 12.8531 21.5875 13.3812 21.5875H18.1156C18.7468 21.5875 18.9531 21.9719 19.0968 22.3125C19.2656 22.7094 19.8843 24.2875 20.9 26.0625C22.5468 28.9562 23.5562 30.1312 24.3656 30.1312C24.5173 30.1295 24.6664 30.0909 24.7999 30.0187C25.8562 29.4312 25.6593 25.6656 25.6124 24.8844C25.6124 24.7375 25.6093 23.2 25.0687 22.4625C24.6812 21.9281 24.0218 21.725 23.6218 21.65C23.7837 21.4266 23.997 21.2455 24.2437 21.1219C24.9687 20.7594 26.275 20.7062 27.5718 20.7062H28.2937C29.7 20.725 30.0625 20.8156 30.5718 20.9437C31.6031 21.1906 31.625 21.8562 31.5343 24.1344C31.5062 24.7812 31.4781 25.5125 31.4781 26.375C31.4781 26.5625 31.4687 26.7625 31.4687 26.975C31.4375 28.1344 31.4 29.45 32.2187 29.9906C32.3255 30.0576 32.4489 30.0933 32.575 30.0937C32.8593 30.0937 33.7156 30.0937 36.0343 26.1156C36.7494 24.8352 37.3709 23.5046 37.8937 22.1344C37.9406 22.0531 38.0781 21.8031 38.2406 21.7062C38.3605 21.6451 38.4935 21.614 38.6281 21.6156H44.1937C44.7999 21.6156 45.2156 21.7062 45.2937 21.9406C45.4312 22.3125 45.2687 23.4469 42.7281 26.8875L41.5937 28.3844C39.2906 31.4031 39.2906 31.5562 41.7374 33.8469Z" fill="#989898" />
                                    </svg>

                                    <svg xmlns="http://www.w3.org/2000/svg" width="61" height="60" viewBox="0 0 61 60" fill="none">
                                        <path d="M35.2093 29.4781L28.1906 26.2031C27.5781 25.9187 27.075 26.2375 27.075 26.9156V33.0844C27.075 33.7625 27.5781 34.0812 28.1906 33.7969L35.2062 30.5219C35.8218 30.2344 35.8218 29.7656 35.2093 29.4781ZM30.1999 0C13.6312 0 0.199951 13.4312 0.199951 30C0.199951 46.5687 13.6312 60 30.1999 60C46.7687 60 60.1999 46.5687 60.1999 30C60.1999 13.4312 46.7687 0 30.1999 0ZM30.1999 42.1875C14.8437 42.1875 14.575 40.8031 14.575 30C14.575 19.1969 14.8437 17.8125 30.1999 17.8125C45.5562 17.8125 45.8249 19.1969 45.8249 30C45.8249 40.8031 45.5562 42.1875 30.1999 42.1875Z" fill="#989898" />
                                    </svg>

                                    <svg xmlns="http://www.w3.org/2000/svg" width="61" height="60" viewBox="0 0 61 60" fill="none">
                                        <path d="M30.2 0C13.64 0 0.199951 13.44 0.199951 30C0.199951 46.56 13.64 60 30.2 60C46.76 60 60.2 46.56 60.2 30C60.2 13.44 46.76 0 30.2 0ZM44.1199 20.4C43.6699 25.14 41.72 36.66 40.7299 41.97C40.31 44.22 39.47 44.97 38.6899 45.06C36.95 45.21 35.63 43.92 33.95 42.81C31.31 41.07 29.81 39.99 27.26 38.31C24.29 36.36 26.21 35.28 27.92 33.54C28.37 33.09 36.0499 26.1 36.2 25.47C36.2208 25.3746 36.218 25.2755 36.1919 25.1814C36.1657 25.0873 36.117 25.001 36.0499 24.93C35.8699 24.78 35.63 24.84 35.42 24.87C35.15 24.93 30.95 27.72 22.76 33.24C21.56 34.05 20.4799 34.47 19.52 34.44C18.4399 34.41 16.4 33.84 14.87 33.33C12.98 32.73 11.51 32.4 11.63 31.35C11.69 30.81 12.44 30.27 13.85 29.7C22.61 25.89 28.43 23.37 31.34 22.17C39.68 18.69 41.39 18.09 42.53 18.09C42.77 18.09 43.34 18.15 43.7 18.45C44 18.69 44.09 19.02 44.1199 19.26C44.09 19.44 44.1499 19.98 44.1199 20.4Z" fill="#989898" />
                                    </svg>

                                </div>

                            </div>
                        </div>

                        <hr />

                        <div>
                            <p>© 2014-2024 Консоль Гейм. Все права защищены. </p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}