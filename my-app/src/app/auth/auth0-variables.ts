interface AuthConfig {
  clientID: string;
  domain: string;
  callbackURL: string;
}

export const AUTH_CONFIG: AuthConfig = {
  clientID: 'LIgo3xCb5T2TChGlghF3XYA2XXhNqUFb',
  domain: 'jamesokbo.auth0.com',
  callbackURL: 'http://localhost:4200/callback'
};
