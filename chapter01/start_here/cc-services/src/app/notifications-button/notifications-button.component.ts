import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NotificationsService } from '../service/notifications.service';

@Component({
  selector: 'app-notifications-button',
  templateUrl: './notifications-button.component.html',
  styleUrls: ['./notifications-button.component.scss']
})
export class NotificationsButtonComponent implements OnInit {

  notificationCount$ : Observable<number>;

  constructor(private notificationService : NotificationsService) { }

  ngOnInit(): void {
    this.notificationCount$ = this.notificationService.count$;
  }

}
