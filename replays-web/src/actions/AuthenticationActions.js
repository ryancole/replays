import { Actions } from 'flummox';

class AuthenticationActions extends Actions {

  login (token) {
    localStorage.setItem('token', token);
    return token;
  }

}

export default AuthenticationActions;