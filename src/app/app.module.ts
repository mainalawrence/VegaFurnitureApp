import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { JwtInterceptor } from './authentication/Services/jwt.interceptor';
import { ErrorComponent } from './Error.Component/error.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './footer/footer.component';
import { HeaderModuleModule } from './header-module/header-module.module';

@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
    CommonModule,
    BrowserAnimationsModule,
   
    
  ],
  providers: [
      {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent,FooterComponent],
  exports:[FooterComponent]
})
export class AppModule { }
