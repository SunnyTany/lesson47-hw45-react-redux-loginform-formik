import { useSelector, useDispatch } from 'react-redux'
import { AuthStateType, UserType, logout } from '../../redux/authSlice'
import styles from './style.module.css'

const WelcomeUser = () => {
  const user: UserType | null = useSelector((state: AuthStateType) => state.user)
  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(logout())
  }

  return (
    <div>
      { user ? <h2 className={styles.title}>Welcome {user.userName}!</h2> : ''}
      <button className={styles.button} onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default WelcomeUser