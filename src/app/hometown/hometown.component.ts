import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { AngularFirestore } from 'angularfire2/firestore';
import { MapMarker } from '../map/map.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-hometown',
  templateUrl: './hometown.component.html',
  styleUrls: ['./hometown.component.scss']
})
export class HometownComponent {

  userMarker$: Observable<MapMarker>;

  constructor(private userService: UserService, private afs: AngularFirestore) {
    this.userMarker$ = this.afs.doc<MapMarker>(`hometowns/${this.userService.currentUser.uid}`).valueChanges();
  }

}