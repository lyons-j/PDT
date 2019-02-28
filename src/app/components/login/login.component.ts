import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public auth: AuthService, private afs: AngularFirestore) { }

  ngOnInit() {
  }

}
