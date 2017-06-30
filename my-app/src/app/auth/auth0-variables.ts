interface AuthConfig {
  clientID: string;
  domain: string;
  callbackURL: string;
  apiUrl: string;
}

export const AUTH_CONFIG: AuthConfig = {
  clientID: 'guhSs4XSA5Gdr92l2mlKzCHcvwbHcKSs',
  domain: 'jamesokbo.auth0.com',
  callbackURL: 'http://localhost:4200/callback',
  apiUrl: 'API_IDENTIFIER'
};
