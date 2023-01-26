import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "@angular/fire/compat/database";
import { Observable } from "rxjs";

interface Key {
  'state': { counter: number }
  'counter': number
}


const convertedKey: {[key:string]: string} = {
  'counter': 'state/counter'
}

interface IDatabaseService {
  get: <T>(key: keyof Key) => Observable< T | null>,
  set: <T>(key: keyof Key, value: T) => Promise<void>
}


@Injectable({providedIn: 'root'})
export class DatabaseService implements IDatabaseService{

  constructor(private db: AngularFireDatabase) {}

  get<T>(key: keyof Key): Observable<T | null> {
    return this.db.object<T>(convertedKey[key]).valueChanges()
  }

  set<T>(key: keyof Key, value: T): Promise<void> {
    return this.db.object<T>(convertedKey[key]).set(value)
  }

}
