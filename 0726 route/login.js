import React from "react";
// 필요한 모듈을 추가로 import하세요.
import {
  Switch,
  BrowserRouter,
  Route,
  Link,
  useLocation,
  Redirect,
} from "react-router-dom";
import LoginForm from './LoginForm'

export default function UserLogin() {

    return (
        <BrowserRouter>
            <Switch>
                
                <Route path="/detail">
                    <UserDetailPage />
                </Route>
                <Route path="/login">
                    <LoginPage />
                </Route>
                <Route path="/">
                    <HomePage />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

// HomePage 페이지 컴포넌트를 구현하세요.
function HomePage() {
  // Link 컴포넌트를 추가하세요.
  return (
    <div>
      <h2>Home Page</h2>
      <div>
      <Link to="/login">Login</Link>
      { /* Link tag를 추가하세요. */ }
      </div>
    </div>
  );
}

// LoginPage 페이지 컴포넌트를 구현하세요.
function LoginPage() {
  return (
    <div>
      <h2>Login Page</h2>
      <LoginForm />
      <div>
      <Link to="/">Back to home</Link>
      { /* Link tag를 추가하세요. */ }
      </div>
    </div>
  );
}

// DetailPage 페이지 컴포넌트를 구현하세요.
function UserDetailPage() {
  // email, password 정보를
  // query param 으로 받아와 저장하고, 정보를 보여주세요.
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)

  const email = searchParams.get('email')
  const password = searchParams.get('password')

  if(!email || !password) {
      return <Redirect to="/login" />   
  }
  
  return (
    <div>
      <h2>User Detail Page</h2>
      <p>
        <h3>User details</h3>
        <em>{email}</em>
        <br />
        <strong>{password}</strong>
      </p>
      <Link to="login">Logout</Link>
      { /* Link tag를 추가하세요. */ }
    </div>
  );
}
