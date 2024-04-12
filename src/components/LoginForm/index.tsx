import * as Yup from 'yup'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import { useDispatch } from 'react-redux'
import { login } from '../../redux/authSlice'
import fieldGroups from './fieldGroups'
import styles from './style.module.css'

const LoginForm = () => {

  const dispatch = useDispatch()

  const validationSchema = Yup.object({
    usernName: Yup.string()
      .required('Login is required')
      .min(3, 'Login must be at least 3 characters')
      .max(15, 'Login must be at most 15 characters'),
    email: Yup.string()
      .required('Login is required')
      .email( 'Email must be a valid email'),
    password: Yup.string()
      .required('Password is required')
      .min(6, 'Password must be at least 5 characters')
      .max(20, 'Password must be at most 20 characters')
  })

  const handleLogin = (user: { usernName: string; email: string; password: string }) => {
    console.log('Login form data: ', user)
    dispatch(login(user))
  }

  return (
    <Formik initialValues={{ usernName: '', email: '', password: '' }} validationSchema={validationSchema} onSubmit={handleLogin}>
      <Form>
        { fieldGroups.map((group, index) => (
          <div key={index} className={styles.formGroup}>
            <label 
              className={styles.label} 
              htmlFor={group.label.htmlFor}
            >{group.label.text}</label>
            <Field 
              className={styles.input} 
              type={group.field.type} 
              placeholder={group.field.placeholder} 
              id={group.field.id} 
              name={group.field.name} 
            />
            <ErrorMessage
              className={styles.errorMessage} 
              name={group.errorMessage.name} 
              component={group.errorMessage.component}
            />
          </div>
        ))}
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  )
}

export default LoginForm