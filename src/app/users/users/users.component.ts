import { Component, OnInit, inject } from '@angular/core';
import { UserService } from '../user.service';
import { Observable } from 'rxjs';
import { User } from '../user.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit{

  userService = inject(UserService);
  activatedRoute = inject(ActivatedRoute);
  router = inject(Router);

  users$!:Observable<User[]>;

  ngOnInit(): void {
    this.users$=this.userService.getUsers();
  }
  navigateToDetail(user:User)
  {
    this.router.navigate(['detail',user.id],{relativeTo:this.activatedRoute})
  }
}
