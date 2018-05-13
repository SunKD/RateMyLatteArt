import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './http.service';//
import { AppComponent } from './app.component'; //
import { FormsModule } from '@angular/forms';//
// import { TaskComponent } from './task/task.component';
import { NewServiceService } from './new-service.service';
import { ShowLatteComponent } from './show-latte/show-latte.component';
import { ShowCommentsComponent } from './show-comments/show-comments.component';//

@NgModule({
  declarations: [
    AppComponent,
    ShowLatteComponent,
    ShowCommentsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,//
    FormsModule//
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
// http://localhost:8000/lattes