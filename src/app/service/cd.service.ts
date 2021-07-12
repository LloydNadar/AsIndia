import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class CdService {
  constructor(public fireservices:AngularFirestore) { }

  customer(Rd)
  {
    return this.fireservices.collection('Message').add(Rd);
  }
}