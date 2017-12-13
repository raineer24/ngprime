import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'register',
  template: `
    Register
   <div class="ui-g">
    <div class="ui-g-6">
         <h4>Register New User</h4>
        
       <form>
       <div class="ui-inputgroup">
    <span class="ui-float-label">
    <input [(ngModel)]="registerData.email" name="email" id="float-input" type="text" size="30" pInputText> 
    <label for="float-input">Email</label>
</span>
      
          <span class="ui-float-label">
    <input [(ngModel)]="registerData.pwd" name="password" id="float-input" type="password" size="30" pInputText> 
    <label for="float-input">Password</label>
</span>

    </div>
    <button (click)="post()" pButton type="button" label="Register"></button>
      </form>
    </div>
    <div class="ui-g-6">Col2</div>
</div>

 
    
  `
})
export class RegisterComponent {
 
  registerData = {}

  constructor( private apiService: ApiService) {}

  post() {
    console.log(this.registerData)
    this.apiService.sendUserRegistration(this.registerData)
  }
}
