import { Injectable }      from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';
import { AuthOption } from './auth.option';


// Avoid name not found warnings
// declare var Auth0Lock: any;
let Auth0Lock: any = require('auth0-lock').default;
@Injectable()
export class Auth {
  
  lock = new Auth0Lock('bkyszQoQKb0ry13eQKBbykNjiwtGZz8G', 'smesolution.auth0.com', this.authOption.options);
  userProfile: Object;

  constructor(private authOption:AuthOption) {

    // Add callback for lock `authenticated` event
    this.userProfile = JSON.parse(localStorage.getItem('profile'));

    this.lock.on("authenticated", (authResult) => {
      this.lock.getProfile(authResult.idToken, (error, profile) => {
        if (error) {
          throw new (Error);
        }
        localStorage.setItem('profile', JSON.stringify(profile));
        localStorage.setItem('id_token', authResult.idToken);
        
        this.userProfile = profile;
        
      });
    });
  }

  public login() {
    // Call the show method to display the widget.
    
    this.lock.show();
  }

  public authenticated() {
    // Check if there's an unexpired JWT
    // This searches for an item in localStorage with key == 'id_token'
    return tokenNotExpired();
  }

  public logout() {
    localStorage.removeItem('id_token');
    localStorage.removeItem('profile');
    this.userProfile = undefined;
  }
}