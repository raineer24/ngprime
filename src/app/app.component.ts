import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  	
  		EOS Social
  		
  		<button pButton type="button" routerLink="/register" label="Register"></button>
  	
  	<router-outlet></router-outlet>


  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Eos';

  
}
