import axios from "axios";

class AuthService {
  login(email, senha) {
    return new Promise((resolve, reject) => {
      axios.post("http://localhost:8080/auth", { email, senha }).then((response) => {
        if (response.data.token) {
          resolve(response.data.token);
        } else {
          reject(response.data.error);
        }

      }).catch(error => {reject(error)})
    });
  }
}

const authService = new AuthService();
export default authService;