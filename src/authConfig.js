export const msalConfig = {
    auth: {
      clientId: "607c7fa6-63ea-4c52-a1de-f0df5b626b2f",
      authority: "https://login.microsoftonline.com/0250005b-4a21-424d-a0e5-9820841f23df", // This is a URL (e.g. https://login.microsoftonline.com/{your tenant ID})
      redirectUri: "http://localhost:3000/",
    },
    cache: {
      cacheLocation: "sessionStorage", // This configures where your cache will be stored
      storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
    }
  };
  
  // Add scopes here for ID token to be used at Microsoft identity platform endpoints.
  export const loginRequest = {
   scopes: ["User.Read"]
  };

  export const graphConfig = {
    graphMeEndpoint: "https://graph.microsoft.com/v1.0/me"
};
  