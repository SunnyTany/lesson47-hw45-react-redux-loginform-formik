import styles from './style.module.css'

const fieldsGroups = [
  {
    label: {
      text: 'Login',
      className: styles.label,
      htmlFor: "usernName"
    },
    field: {
      className: styles.input,
      type: "text",
      placeholder: "Enter login",
      id: "usernName", 
      name: "usernName"
    },
    errorMessage: {
      className: styles.errorMessage,
      name: "usernName",
      component: "div"
    }
  },
  {
    label: {
      text: 'Email',
      className: styles.label,
      htmlFor: "email"
    },
    field: {
      className: styles.input,
      type: "email",
      placeholder: "Enter email",
      id: "email",
      name: "email"
    },
    errorMessage: {
      className: styles.errorMessage,
      name: "email",
      component: "div"
    }
  },
  {
    label: {
      text: 'Password',
      className: styles.label,
      htmlFor: "password"
    },
    field: {
      className: styles.input,
      type: "password",
      placeholder: "Enter password",
      id: "password",
      name: "password"
    },
    errorMessage: {
      className: styles.errorMessage,
      name: "password",
      component: "div"
    }
  }
]

export default fieldsGroups