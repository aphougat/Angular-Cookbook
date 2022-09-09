import { Component, OnInit } from '@angular/core';
import { NotificationsService } from '../service/notifications.service';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-notifications-manager',
  templateUrl: './notifications-manager.component.html',
  styleUrls: ['./notifications-manager.component.scss']
})
export class NotificationsManagerComponent implements OnInit {
  notificationsCount$ : Observable<number>;
  constructor(private notificationService: NotificationsService) {}

  ngOnInit(): void {
    this.notificationsCount$ = this.notificationService.count$;
  }

  getCountValue = (callBack) => {
    this.notificationsCount$.pipe(first()).subscribe(callBack);
  }

  addNotification = () => {
    this.getCountValue((countValue) => {
      this.notificationService.setCount(++countValue);
    });
  }

  removeNotification = () => {

    this.getCountValue((countValue) => {
      if (countValue === 0) {
        return;
      }
      this.notificationService.setCount(--countValue);
    });
  }

  resetCount = () => {
      this.notificationService.setCount(0);
  }

}
