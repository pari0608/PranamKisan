// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  // BASE_URL:'https://our-river-our-life-api.herokuapp',
  OROL_API_URL: 'https://our-river-our-life-api.herokuapp/',
  REDIRECT_URL: 'http://localhost:4200',
  production: false,
  firebase: {
  apiKey: "AIzaSyD_WMOCwcoE87Anjb7NBzQC3n4dhX6beHY",
  authDomain: "pranamkishan-c81b9.firebaseapp.com",
  databaseURL: "https://pranamkishan-c81b9-default-rtdb.firebaseio.com",
  projectId: "pranamkishan-c81b9",
  storageBucket: "pranamkishan-c81b9.appspot.com",
  messagingSenderId: "155115662375",
  appId: "1:155115662375:web:f1f25bbae7c166a9887202",
  measurementId: "G-V3PHV6ZGFG"

  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
