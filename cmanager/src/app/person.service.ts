import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private db:AngularFireDatabase) { }

  create(person){
    this.db.list('/customerDB').push(person);
  }

  getAll(){
    return this.db.list('/customerDB').snapshotChanges();
  }

  get(personId){
    return this.db.object('/customerDB/'+personId);
  }

  update(personId, person){
   return this.db.object('/customerDB/' +personId).update(person);
  }

  delete(personId){
    return this.db.object('/customerDB/' + personId).remove();
  }
}
