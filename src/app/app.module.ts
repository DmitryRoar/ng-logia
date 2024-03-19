import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

import { AppComponent } from './app.component';
import { ContactComponent } from './components/contact/contact.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { SvgIconComponent } from './components/ui-kit/svg-icon/svg-icon.component';
import { HomePageComponent } from './home-page/home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomePageComponent,
    ProductListComponent,
    SvgIconComponent,
  ],
  imports: [BrowserModule, SweetAlert2Module.forRoot(), ContactComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
