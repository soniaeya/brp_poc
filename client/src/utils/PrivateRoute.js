import { Redirect, Route } from 'react-router-dom'
// import { useContext } from 'react'
// import AuthContext from '../context/AuthContext'

const PrivateRoute = ({children, ...rest}) => {
    // let {user} = useContext(AuthContext)
    const authenticate = false;
    return(
        <Route {...rest}>{!authenticate ? <Redirect to="/login" /> :   children}</Route>
    )
}

export default PrivateRoute;