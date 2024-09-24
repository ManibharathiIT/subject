import { Component } from '@angular/core';
import { CustomPipe } from './custom.pipe';
import { Pipe } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'custom_pipe';
  obj ={name:"mani",title:"head",num:2};
  value:number[]=[1,2,3,4,5];
}
