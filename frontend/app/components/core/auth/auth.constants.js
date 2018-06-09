(function() {
  'use strict';

  angular
    .module('frontend.core.auth')
    .constant('HTTP_STATUS_CODE', {
      OK: 200,
      ACCEPTED: 202,
      NO_CONTENT: 204,
      UNAUTHORIZED: 401,
      FORBIDDEN: 403,
      TOKEN_EXPIRED: 419,
      SERVER_ERROR: 500,
    })
    .constant('SECURITY', {
      ACTIVATED: true,
      ACCESS_TOKEN: 'JWTToken',
      REFRESH_TOKEN: 'RefreshToken',
      ACCESS_TOKEN_HEADER: 'authorization',
      REFRESH_TOKEN_HEADER: 'refresh',
    })
    .constant('USER_ROLES', {
      ADMIN: 'ADMIN',
      USER: 'USER',
    })
    .constant('AUTH_EVENTS', {
      LOGIN_SUCCESS: 'auth-login-success',
      LOGIN_FAILED: 'auth-login-failed',
      LOGOUT_SUCCESS: 'auth-logout-success',
      TOKEN_EXPIRED: 'auth-token-expired',
      NOT_AUTHENTICATED: 'auth-not-authenticated',
      NOT_AUTHORIZED: 'auth-not-authorized',
    })
    .constant('TRANSLATE', {
      FR: {
        APP_LOGO: 'images/hello-world.png',
        APP_NAME: 'Hello World application',
        AUTH_BAD_LOGIN: "Login inconnu",
        AUTH_BAD_PASSWORD: "Mot de passe incorrect",
        AUTH_ERROR: "Erreur lors de la connexion",
        AUTH_BTN_CONNEXION: 'Connexion',
        AUTH_PLACEHOLDER_LOGIN: 'Login',
        AUTH_PLACEHOLDER_PASSWORD: 'Mot de passe',
      },
      EN: {
        APP_LOGO: 'images/hello-world.png',
        APP_NAME: 'Hello World app',
        AUTH_BAD_LOGIN: "Bad login",
        AUTH_BAD_PASSWORD: "Bad password",
        AUTH_ERROR: "An error occured while connection",
        AUTH_BTN_CONNEXION: 'Connection',
        AUTH_PLACEHOLDER_LOGIN: 'Login',
        AUTH_PLACEHOLDER_PASSWORD: 'Password',
      }
    });
})();
