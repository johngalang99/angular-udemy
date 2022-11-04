export class AuthService {
  logginIn = false;

  isAuthenticated() {
    const promise = new Promise(
      (resolve, reject) => {
        setTimeout(() => {
          resolve(this.logginIn);
        }, 800);
      }
    );
    return promise;
  }

  login() {
    this.logginIn = true;
  }

  logout() {
    this.logginIn = false;
  }
}
