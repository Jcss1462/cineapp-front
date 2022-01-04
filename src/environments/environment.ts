// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  apiUrl: 'https://cineappheroku.herokuapp.com/api/v1/',
  firebase: {
    projectId: 'cine-app-8ba39',
    appId: '1:284721381285:web:a6319ffffd57521b0e724c',
    storageBucket: 'cine-app-8ba39.appspot.com',
    apiKey: 'AIzaSyByMEygNVtrqWakFUzghz1iFpSbocoQ1vc',
    authDomain: 'cine-app-8ba39.firebaseapp.com',
    messagingSenderId: '284721381285',
    measurementId: 'G-LL56DKNJJC',
  },
  production: false,
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
