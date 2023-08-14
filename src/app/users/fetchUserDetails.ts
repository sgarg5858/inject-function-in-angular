import { inject } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { Subject, map, switchMap, takeUntil } from "rxjs";
import { UserService } from "./user.service";

export const fetchUserDetails = () =>{
  
    const activatedRoute = inject(ActivatedRoute);
    const userService= inject(UserService);
   
    return activatedRoute.params.pipe(
     map((params:Params)=>params['id']),
     switchMap((id)=> userService.getUser(id))
   )
   }