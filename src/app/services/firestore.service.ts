import { Injectable } from '@angular/core';
import { AngularFirestore} from '@angular/fire/compat/firestore';
import { Trabajador } from '../trabajador';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private firestore: AngularFirestore) { }

  setWorker(trabajador: Trabajador){
    console.log(trabajador)
    this.firestore.collection("Trabajadores").add(trabajador);

  }
  readWorkers(): Observable<any>
  {
    return this.firestore.collection("Trabajadores").snapshotChanges();
  }
  deleteWorker(id: string): Promise <any>
  {
    return this.firestore.collection("Trabajadores").doc(id).delete();
  }
}
