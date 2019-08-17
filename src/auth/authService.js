/* eslint-disable */

import auth0 from 'auth0-js';
import EventEmitter from 'events';
import authConfig from '../configs/auth_config.json';

const localStorageKey = 'loggedIn';
const loginEvent = 'loginEvent';

const webAuth = new auth0.WebAuth({
    domain: authConfig.domain,
    redirectUri: `${window.location.origin}/callback`,
    clientID: authConfig.clientId,
    audience: authConfig.audience,
    responseType: 'token id_token',
    scope: 'openid profile email'
});

class AuthService extends EventEmitter {
    idToken = null;
    profile = null;
    tokenExpiry = null;
    accessToken = null;
    accessTokenExpiry = null;

    login(customState) {
        webAuth.authorize({
            appState: customState
        });
    }

    handleAuthentication() {
        return new Promise((resolve, reject) => {
            webAuth.parseHash((err, authResult) => {
                if (err) {
                    console.log('handleAuthentication TOKENS ERROR: ', err);
                    reject(err);
                } else {
                    console.log('handleAuthentication We here: ', authResult);
                    this.localLogin(authResult);
                    resolve(authResult.idToken);
                }
            });
        });
    }

    localLogin(authResult) {
        this.idToken = authResult.idToken;
        this.profile = authResult.idTokenPayload;
        this.tokenExpiry = new Date(this.profile.exp * 1000);
        this.accessToken = authResult.accessToken;
        this.accessTokenExpiry = new Date(Date.now() + authResult.expiresIn * 1000);

        localStorage.setItem(localStorageKey, true);

        this.emit(loginEvent, {
            loggedIn: true,
            profile: authResult.idTokenPayload,
            state: authResult.appState || {}
        });
    }

    renewTokens() {
        return new Promise((resolve, reject) => {
            if (!localStorage.getItem(localStorageKey)) {
                console.log('RENEW TOKENS ERROR');
                return reject("Not logged in");
            }

            webAuth.checkSession({}, (err, authResult) => {
                if (err) {
                    console.log('RENEW TOKENS ERROR: ', err);
                    reject(err);
                } else {
                    console.log('checkSession: ', authResult);
                    this.localLogin(authResult);
                    resolve(authResult);
                }
            });
        });
    }

    logOut() {
        localStorage.removeItem(localStorageKey);

        this.idToken = null;
        this.tokenExpiry = null;
        this.profile = null;

        console.log(`${window.location.origin}`)
        webAuth.logout({
            returnTo: `${window.location.origin}/`
        });

        this.emit(loginEvent, { loggedIn: false });
    }

    isAuthenticated() {
        return (
            Date.now() < this.tokenExpiry &&
            localStorage.getItem(localStorageKey) === 'true'
        );
    }

    isAccessTokenValid() {
        return (
          this.accessToken &&
          this.accessTokenExpiry &&
          Date.now() < this.accessTokenExpiry
        );
      }
    
      getAccessToken() {
        return new Promise((resolve, reject) => {
          if (this.isAccessTokenValid()) {
            resolve(this.accessToken);
          } else {
            this.renewTokens().then(authResult => {
              resolve(authResult.accessToken);
            }, reject);
          }
        });
      }
}

const service = new AuthService();

export default service;