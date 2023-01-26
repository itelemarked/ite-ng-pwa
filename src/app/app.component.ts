import { Component } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

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

  constructor(private swUpdate: SwUpdate) {
    this.swUpdate.versionUpdates.subscribe(console.log)
  }
}
