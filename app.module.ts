import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CustomPipe } from './custom.pipe';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,CustomPipe
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
