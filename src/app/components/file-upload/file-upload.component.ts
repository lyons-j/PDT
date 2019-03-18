import { Component, OnInit } from '@angular/core';
import { AngularFirestore} from '@angular/fire/firestore';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';

@Component({
  selector: 'file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {

  // Main task
  task: AngularFireUploadTask;

  // Progress monitoring
  percentage: Observable<number>;
  
  snapshot: Observable<any>;

  // Download URL
  downloadURL: Observable<string>;

  // State for dropzone CSS toggling
  isHovering: boolean;


  constructor(private storage: AngularFireStorage, private afs: AngularFirestore) { }

  toggleHover(event:boolean){
    this.isHovering = event;
  }

  startUpload(event: FileList){
    // The File Object
    const file = event.item(0)

    // Client-side validation
    if(file.type.split('/')[0] !== 'image'){
      console.error('unsupported file type :(')
      return;
    }

    // The storage path
    const path = `test/${new Date().getTime()}_${file.name}`;
  
    // Totally optional metadata
    const customMetadata = { app: 'My AngularFire-powered PWA'};
 
    // The main task
    this.task = this.storage.upload(path, file, { customMetadata })
  
    // Progress monitoring
    this.percentage = this.task.percentageChanges();
    this.snapshot = this.task.snapshotChanges().pipe(
      tap(snap => {

        if(snap.bytesTransferred === snap.totalBytes){
          // Update firestore on completion
          this.afs.collection('photos').add({ path, size: snap.totalBytes })
        
        }
      })
    );
  
    // The file's download URL
    this.task.snapshotChanges().pipe(
      finalize(() => this.downloadURL = this.storage.ref(path).getDownloadURL())
    )
    .subscribe();

  }
  // Determines if the upload task is active
  isActive(snapshot){
    return snapshot.state === 'running' && snapshot.bytesTransferred < snapshot.totalBytes

  }

  ngOnInit() {
  }

}
