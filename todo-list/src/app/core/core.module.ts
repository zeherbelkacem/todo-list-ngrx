import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';

import { CoreRoutingModule } from './core-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    CoreRoutingModule,
    FormsModule,
    TableModule,
    ToastModule,
    ButtonModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  exports: [NavbarComponent], //components to be used in others module
})
export class CoreModule {}
