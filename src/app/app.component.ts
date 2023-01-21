import { Component } from '@angular/core';

// import { initializeApp } from 'firebase/app';
// import { getDatabase, onValue, ref } from 'firebase/database';

@Component({
  selector: 'app-root',
  styles: [``],
  template: `
    <ion-app>
      <ion-router-outlet></ion-router-outlet>
    </ion-app>
  `,
})
export class AppComponent {

  constructor() {
    // const firebaseConfig = {
    //   apiKey: 'AIzaSyCzZgP4uc1diT0PlhnIu88WsnLPPs5iz4M',
    //   authDomain: 'ite-ng-pwa.firebaseapp.com',
    //   databaseURL:
    //     'https://ite-ng-pwa-default-rtdb.europe-west1.firebasedatabase.app',
    //   projectId: 'ite-ng-pwa',
    //   storageBucket: 'ite-ng-pwa.appspot.com',
    //   messagingSenderId: '61715222223',
    //   appId: '1:61715222223:web:285299307db3a2709071ba',
    // };

    // // Initialize Firebase
    // const app = initializeApp(firebaseConfig);

    // const getData = (path: string) => {
    //   const db = getDatabase(app);
    //   const starCountRef = ref(db, path);
    //   onValue(starCountRef, (snapshot) => {
    //     console.log(snapshot.val());
    //   });
    // };

    // getData('state/counter');

  }
}
