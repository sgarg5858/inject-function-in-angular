import { Component, OnDestroy, inject } from '@angular/core';
import {  Router } from '@angular/router';
import { User } from '../user.model';
import { Observable, Subject } from 'rxjs';
import { fetchUserDetails } from '../fetchUserDetails';


@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent  implements OnDestroy{

  router = inject(Router);

  destroy$ = new Subject<void>();  
  user$:Observable<User|undefined>|undefined = fetchUserDetails(this.destroy$);
  
  closePreview()
  {
    this.router.navigate(['users'])
  }

  ngOnDestroy(): void {
      this.destroy$.next();
      this.destroy$.complete();
  }
}
