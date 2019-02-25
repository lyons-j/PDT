import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface Item { name: string; }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit{

  private itemsCollection: AngularFirestoreCollection<Item>;
  items: Observable<Item[]>;

  constructor(public auth: AuthService,
    private afs: AngularFirestore
    ){ 
   
  }

  ngOnInit(){
    this.itemsCollection = this.afs.collection<Item>('staff');
    this.items = this.itemsCollection.snapshotChanges();
    this.items.subscribe(values =>{
      console.log(values)
    })
  }
  title = 'PDT';
}
