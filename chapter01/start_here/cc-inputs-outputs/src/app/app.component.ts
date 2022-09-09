import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  notificationsCount = 10;

  updateNotificationCount = ($event: number) => {
    this.notificationsCount = $event;
  }
}
