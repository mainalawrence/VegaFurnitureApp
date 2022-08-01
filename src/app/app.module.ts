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
import { FooterComponent } from './Footer/footer/footer.component';
import { AboutUsComponent } from './Footer/about-us/about-us.component';
import { CustomerServiceComponent } from './Footer/customer-service/customer-service.component';
import { PrivacyPolicyComponent } from './Footer/privacy-policy/privacy-policy.component';
import { ContactUsComponent } from './Footer/contact-us/contact-us.component';

@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    FooterComponent,
    AboutUsComponent,
    CustomerServiceComponent,
    PrivacyPolicyComponent,
    ContactUsComponent
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
