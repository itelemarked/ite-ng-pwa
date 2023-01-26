import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-home',
  styles: [``],
  template: `
    <ion-header>
      <ion-toolbar>
        <ion-title>Home6</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <p>Counter: {{ counter }}</p>
      <ion-button (click)="decrement()">-</ion-button>
      <ion-button (click)="increment()">+</ion-button>
    </ion-content>
  `,
})
export class HomeComponent {

  counter!: number | null;

  constructor(private db: DatabaseService) {
    this.db.get<number>('counter').subscribe(val => this.counter = val)
  }

  increment() {
    if (this.counter) {
      this.counter++;
      this.db.set('counter', this.counter)
    }
  }

  decrement() {
    if (this.counter) {
      this.counter--;
      this.db.set('counter', this.counter)
    }
  }
}

