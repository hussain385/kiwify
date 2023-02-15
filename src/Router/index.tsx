import { createHashRouter } from 'react-router-dom'
import Login from '../pages/Login'
import SignUp from '../pages/SignUp'

const router = createHashRouter([
	{
		path: '/',
		element: <Login />
	},
	{
		path: '/signup',
		element: <SignUp />
	}
])

export default router
