import Auth0Lock from "auth0-lock";
const authDomain = "nawazshaik.auth0.com";
const clientId = "6czZlOQU2Jv3CXKg0053y59wgiRaGpp3";

class AuthService {
  constructor() {
    this.lock = new Auth0Lock(clientId, authDomain,{
      auth : {
        params : {
          scope : 'openid email'
        },
      },
    })

    this.showLock = this.showLock.bind(this);
    this.lock.on("authenticated", this.authProcess.bind(this));
  }

  authProcess = (authResult) => {
    console.log(authResult);
  }

  showLock() {
    this.lock.show();
  }

  setToken = (authFields) => {
    let {
      idToken,
      exp
    } = authFields;
    localStorage.setItem("idToken", idToken);
    localStorage.setItem("exp", exp * 1000);
  }

  isCurrent = () => {
    let expString = localStorage.getItem("exp");

    if(!expString) {
      localStorage.removeItem("idToken");
      localStorage.removeItem("exp");
      return false;
    }
    let now = new Date();
    let exp = new Date(parseInt(expString, 10));
    if(exp < now) {
      this.logout();
      return false;
    }
    else {
      return true;
    }
  }

  getToken() {
    let idToken = localStorage.getItem("idToken");
    if(this.isCurrent() && idToken) {
      return idToken;
    }
    else{
      localStorage.removeItem("idToken");
      localStorage.removeItem("exp");
      return false;
    }
  }

  logout = () => {
    localStorage.removeItem("idToken");
    localStorage.removeItem("exp");
    location.reload();
  }
}
