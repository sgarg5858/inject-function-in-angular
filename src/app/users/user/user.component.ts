import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {

  @Input() user:User|undefined;
  @Output() showDetailForUser = new EventEmitter<User>();
  showDetail()
  {
    console.log(this.user);
    this.showDetailForUser.emit(this.user);
  }
}
