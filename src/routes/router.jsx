import { createBrowserRouter } from 'react-router-dom'
import { Root } from './root'
import { Home } from '../Pages/Home'
import { Error } from '../Pages/Error'
import { Cart } from '../Pages/Cart'
import { Favorites } from '../Pages/Favorites'
import { Product } from '../Pages/Product'

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      errorElement: <Error/>,
      children: [
        {
          path: '/',
          element: <Home/>
        },
        {
          path: '/cart',
          element: <Cart/>
        },
        {
          path: '/favorites',
          element: <Favorites />
        },
        {
          path: '/products/:id',
          element: <Product/>
        }
      ]
    },
])

export default router