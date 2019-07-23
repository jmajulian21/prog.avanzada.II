import React from 'react'

var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const AuthContext = React.createContext({
  isAuth: false,
  userData: {id_persona:0,nombre:"",apellido:"",tipo_usuario:'Anonimo'},
  login:() => {},
  logout:() => {},
})

class AuthProvider extends React.Component {
  state = { isAuth: false,  userData: {id_persona:0,nombre:"",apellido:"",tipo_usuario:'Anonimo'}}

  constructor() {
    super()
    this.login = this.login.bind(this)
    this.logout = this.logout.bind(this)
  }

  login(user,pass,e) {
    if(e){
    fetch('http://localhost:8081/login', {
      method: 'POST',
      body: JSON.stringify({ usuario: user, contraseña: pass }),
      headers: myHeaders
    })
      .then(response => response.json())
      .then(data => {
        setTimeout(() => this.setState({isAuth: false,userData:data}))}
      )
      console.log("userData: "+ this.state.userData);
    }
  }

  logout() {
    this.setState({ isAuth: false })
  }

  render() {
    return (
      <AuthContext.Provider
        value={{
          isAuth: this.state.isAuth,
          userData: this.state.userData,
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