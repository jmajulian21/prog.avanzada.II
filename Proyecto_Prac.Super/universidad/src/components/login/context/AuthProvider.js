import React from 'react'

const AuthContext = React.createContext({
  isAuth: false,
  login:() => {},
  logout:() => {},
})

class AuthProvider extends React.Component {
  state = { isAuth: false }

  constructor() {
    super()
    this.login = this.login.bind(this)
    this.logout = this.logout.bind(this)
  }

  login(user,pass) {
    setTimeout(() => this.setState({ isAuth: true }), 1000000)
    console.log("Usuario: "+user + "Password: "+pass)
  }

  logout() {
    this.setState({ isAuth: false })
  }

  render() {
    return (
      <AuthContext.Provider
        value={{
          isAuth: this.state.isAuth,
          login: this.login,
          logout: this.logout
        }}
      >
        {this.props.children}
      </AuthContext.Provider>
    )
  }
}

const AuthConsumer = AuthContext.Consumer

export { AuthProvider, AuthConsumer }

/*cargar = (user,pass) =>{
  fetch('http://localhost:8081/login', {
    method: 'POST',
    body: JSON.stringify({ usuario: user, contraseña: pass }),
    headers: myHeaders
  })
    .then(function(response){ 
      userData = response.json(); 
    })
}*/