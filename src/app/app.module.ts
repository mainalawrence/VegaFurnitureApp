import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { JwtInterceptor } from './authentication/Services/jwt.interceptor';
import { ErrorComponent } from './Error.Component/error.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './header-module/Footer/footer/footer.component';
import { AboutUsComponent } from './header-module/Footer/about-us/about-us.component';
import { CustomerServiceComponent } from './header-module/Footer/customer-service/customer-service.component';
import { PrivacyPolicyComponent } from './header-module/Footer/privacy-policy/privacy-policy.component';
import { ContactUsComponent } from './header-module/Footer/contact-us/contact-us.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    AboutUsComponent,
    CustomerServiceComponent,
    PrivacyPolicyComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
    CommonModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule { }
