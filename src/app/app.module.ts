import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginService } from './service/login.service';
import { BookfilterPipe } from './pipe/bookfilter.pipe';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.router';
import { HomeComponent } from './home/home.component';
import { BootstrapComponent } from './bootstrap/bootstrap.component';
import { FormComponent } from './form/form.component';
import { ContentComponent } from './content/content.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    BookfilterPipe,
    HomeComponent,
    BootstrapComponent,
    FormComponent,
    ContentComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
