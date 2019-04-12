import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { environment } from '../environments/environment';

import { AppRoutingModule, routingComponent } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule, FirestoreSettingsToken } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material';
import { TopNavComponent } from './components/top-nav/top-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { LoginComponent } from './components/login/login.component';
import { DropZoneDirective } from './drop-zone.directive';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { FileSizePipe } from './file-size.pipe';
import { AuthService } from './services/auth.service';
import { LoadingComponent } from './components/loading/loading.component';
import { CoursesListComponent } from './components/courses/courses-list/courses-list.component';
import { CoursesDetailComponent } from './components/courses/courses-detail/courses-detail.component';
import { UsersListComponent } from './components/users/users-list/users-list.component';
import { UsersDetailComponent } from './components/users/users-detail/users-detail.component';
import { UsersFormComponent } from './components/users/users-form/users-form.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponent,
    TopNavComponent,
    LoginComponent,
    DropZoneDirective,
    FileUploadComponent,
    FileSizePipe,
    LoadingComponent,
    CoursesListComponent,
    CoursesDetailComponent,
    UsersListComponent,
    UsersDetailComponent,
    UsersFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    RouterModule.forRoot([ ]),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule, // storage
    BrowserAnimationsModule, LayoutModule, MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule
  ],
  providers: [AuthService, {provide: FirestoreSettingsToken, useValue: {} }],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
