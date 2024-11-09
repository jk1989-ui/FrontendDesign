import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  constructor() { }

  userRegister(payLoad:any){
    console.log('you havbe reached the service',payLoad)
    return payLoad
  }
}
