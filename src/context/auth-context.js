import React from 'react';

const AuthContext = React.createContext();


function AuthProvider(props) {
    const [login] = useMutation(LOGIN_USER_MUTATION)

const signin = (username, password) => {
    return login({ variables: { username, password } }).then(res => {
      if (res && res.data && res.data.login && res.data.login.token) {
        const { token } = res.data.login
        localStorage.setItem(AUTH_TOKEN, token)
        refetch()
      } else {
        throw Error('No token returned');
      }
      return res
    })
  }



  const logout = () => {
    localStorage.removeItem(AUTH_TOKEN)
    refetch()
  }

  if (loading) {
    return <p>Loading</p>
  }

  return (
    <AuthContext.Provider
      value={{ data, signin, logout, register }}
      {...props}
    />
  )
}
const useAuth = () => React.useContext(AuthContext)

export { AuthProvider, useAuth }