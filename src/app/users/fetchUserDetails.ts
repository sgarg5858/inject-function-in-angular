import { inject } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { Subject, map, switchMap, takeUntil } from "rxjs";
import { UserService } from "./user.service";

export const fetchUserDetails = (destroy$:Subject<void>) =>{
  
    const activatedRoute = inject(ActivatedRoute);
    const userService= inject(UserService);
   
    return activatedRoute.params.pipe(
     map((params:Params)=>params['id']),
     switchMap((id)=>{
       console.log(id);
      return userService.getUser(id)
     }),
     takeUntil(destroy$)
   )
   }