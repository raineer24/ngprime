import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  	<mat-toolbar>
  		EOS Social
  		<span style="flex: 1 1 auto"></span>
  		<button matbutton routerLink="/register">Register</button>
  	</mat-toolbar>
  	<router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Eos';

  
}
