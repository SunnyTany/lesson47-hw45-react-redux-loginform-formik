import { Provider, useSelector } from 'react-redux'
import store from './redux/store'
import { AuthStateType } from './redux/authSlice'
import WelcomeUser from './components/WelcomeUser'
import LoginForm from './components/LoginForm/index'
import './App.css'

function App() {
  const isAuthenticated  = useSelector( (state: AuthStateType) => state.isAuthenticated )

  return (
    <Provider store={store}>
      <div>
        { isAuthenticated ? 
          ( <WelcomeUser/>) : 
          (<>
            <p>You are not logged in.</p>
            <LoginForm />
          </>)
        }
      </div>
    </Provider>
  )
}

export default App