import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UpdateProdutoComponent } from './produto/atualizar/update-produto.component';
import { CreateProdutoComponent } from './produto/cadastrar/create-produto.component';
import { ListProdutoComponent } from './produto/listar/list-produto.component';

const routes: Routes = [

  //-----------PRODUTO----------------//
  {path:'cadastro', component:CreateProdutoComponent},
  {path:'listagem', component:ListProdutoComponent},
  {path:'atualizar/:id', component:UpdateProdutoComponent},

  //-------------HOME-----------------//
  {path:'home', component:HomeComponent},
  {path:'', component:HomeComponent},
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],

  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
