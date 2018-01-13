import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router'; 

import { CurrencyMaskModule } from "ng2-currency-mask";

import { ItemService } from './services/item.service';
import { AppComponent } from './app.component';
import { 
  CreateItemFormComponent 
} from './components/create-item-form/create-item-form.component';
import { 
  ItemPreviewComponent 
} from './components/item-preview/item-preview.component';

const appRoutes: Routes = [
  {
    path: '',
    component: CreateItemFormComponent
  },
  {
    path: 'success',
    component: ItemPreviewComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    CreateItemFormComponent,
    ItemPreviewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    CurrencyMaskModule
  ],
  providers: [
    ItemService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
