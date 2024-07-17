import { createBrowserRouter } from 'react-router-dom'
import { Root } from './root'
import { Home } from '../Pages/Home'
import { Error } from '../Pages/Error'
import { Cart } from '../Pages/Cart'

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
        }
      ]
    },
])

export default router