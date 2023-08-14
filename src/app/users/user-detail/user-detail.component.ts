import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { User } from '../user.model';
import { UserService } from '../user.service';
import { Observable, Subject, filter, map, mergeMap, switchMap, takeUntil, tap } from 'rxjs';
@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent  implements OnInit,OnDestroy{

  activatedRoute = inject(ActivatedRoute);
  userService= inject(UserService);
  router = inject(Router);
  user$:Observable<User|undefined>|undefined;
  destory$ = new Subject<void>();
  
  ngOnInit(): void {

    this.user$ = this.activatedRoute.params.pipe(
      map((params:Params)=>params['id']),
      switchMap((id)=>{
        console.log(id);
       return this.userService.getUser(id)
      }),
      takeUntil(this.destory$)
    )
  }

  closePreview()
  {
    this.router.navigate(['users'])
  }
  ngOnDestroy(): void {
      this.destory$.next();
      this.destory$.complete();
  }
}
