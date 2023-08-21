import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InventoryComponent } from './components/inventory/inventory.component';
import { CartComponent } from './components/cart/cart.component';
import { ReactiveFormsModule } from '@angular/forms'
import { ToDoFormComponent } from './components/to-do-form/to-do-form.component';

@NgModule({
  declarations: [
    AppComponent,
    InventoryComponent,
    CartComponent,
    ToDoFormComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
