import decode from "jwt-decode";
import { url } from "./url";

let AuthSingleton = (function() {
  let instance;

  function createInstance() {
    return new AuthService();
  }

  return {
    getInstance: function() {
      if (!instance) {
        instance = createInstance();
      }

      return instance;
    }
  };
})();

class AuthService {
  constructor() {
    this.fetch = this.fetch.bind(this);
    this.login = this.login.bind(this);
    this.loggedIn = this.loggedIn.bind(this);
    this.getProfile = this.getProfile.bind(this);
    this.checkResponse = this.checkResponse.bind(this);
    this.refreshToken = this.refreshToken.bind(this);

    setInterval(() => this.refreshToken(), 60000);
  }
  login(email, password) {
    return this.fetch(`/signin`, {
      method: "POST",
      body: JSON.stringify({
        email,
        password
      })
    }).then(response => {
      this.setToken(response.token);

      return Promise.resolve(response);
    });
  }
  signUp = (email, password) => {
    return this.fetch(`/signup`, {
      method: "POST",
      body: JSON.stringify({
        email,
        password
      })
    }).then(response => {
      return Promise.resolve(response);
    });
  };

  loggedIn() {
    const token = this.getToken();

    return !!token && !this.isTokenExpired(token);
  }

  isTokenExpired(token) {
    try {
      const decoded = decode(token);

      return decoded.exp < Date.now() / 1000;
    } catch (err) {
      return false;
    }
  }
  logOut = () => {
    localStorage.removeItem("token");
  };

  getRole = () => {
    console.log(token)

    const token = this.getToken();
    if (token !== null) {
      const decodedToken = decode(token);
      return decodedToken.role;
    } else {
      return false;
    }
  };
  setToken(token) {
    localStorage.setItem("token", token);
  }
  getToken() {
    return localStorage.getItem("token") || "";
  }
  getTokenExpiration(token) {
    if (null !== token) {
      const decoded = decode(token);

      return Math.floor(decoded.exp);
    }
    return 0;
  }
  refreshToken = () => {
    if (!this.loggedIn()) {
      return;
    }
    let now = Date.now() / 1000;
    let expire = this.getTokenExpiration(this.getToken());
    let limit = 600;

    if (now >= expire - limit) {
      return this.fetch(`${url}/api/refresh_token`).then(response => {
        if (response.user.token !== undefined) {
          this.setToken(response.user.token);
        }

        return Promise.resolve(response);
      });
    }
  };
  getProfile() {
    return this.getToken() && decode(this.getToken());
  }
  fetch(passedUrl, options = {}) {
    let headers = {
      Accept: "multipart/form-data",
      "Content-Type": "application/json"
    };

    if (this.loggedIn()) {
      headers["authorization"] = this.getToken();
    }

    return fetch(`${url}${passedUrl}`, { headers, ...options })
      .then(this.checkResponse)
      .then(response => response.json());
  }
  checkResponse(response) {
    if (response.status >= 200 && response.status < 300) {
      return response;
    } else {
      return response.json().then(data => {
        throw data;
      });
    }
  }
}

export default AuthSingleton;
