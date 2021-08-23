import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { CreateProdutoComponent } from './produto/cadastrar/create-produto.component';
import { ListProdutoComponent } from './produto/listar/list-produto.component';
import { SortPipe } from './pipe/pipe.component';
import { ProdutoService } from './service/produto.service';
import { UpdateProdutoComponent } from './produto/atualizar/update-produto.component';
// import {MatDatepickerModule} from '@angular/material/datepicker';


@NgModule({
  declarations: [
    AppComponent,

    HomeComponent,
    NavComponent,

    CreateProdutoComponent,
    ListProdutoComponent,
    UpdateProdutoComponent,

    SortPipe

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    // MatDatepickerModule
  ],
  providers: [
    ProdutoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
