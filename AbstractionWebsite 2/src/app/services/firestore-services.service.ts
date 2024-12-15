import { Injectable } from '@angular/core';
import { Firestore, CollectionReference, collection, addDoc, collectionData, query, where, getDocs } from '@angular/fire/firestore';
import { inject } from '@angular/core';
import { Observable } from 'rxjs';

export interface Signup {
  firstname: string;
  lastname: string;
  email: string;
  grade: string;
}

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  firestore: Firestore = inject(Firestore);
  signup: CollectionReference;
  public msgs$: Observable<Signup[]>;

  constructor() { 
    this.signup = collection(this.firestore, 'Login');
    const q = query(this.signup);
    this.msgs$ = collectionData<Signup[]>(q);
  }

  // Method to add a new user with email uniqueness check
  async addUser(user: Signup): Promise<void> {
    const newUser: Signup = {
      firstname: user.firstname,
      lastname: user.lastname,
      email: user.email,
      grade: user.grade
    };

    // Query to check if a user with the same email already exists
    const q = query(this.signup, where('email', '==', newUser.email));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      // If email already exists, throw an error or handle as needed
      throw new Error('Signup Error: Email is already in use!');
    }

    // If email is unique, add the new user to Firestore
    await addDoc(this.signup, newUser);
  }

}

