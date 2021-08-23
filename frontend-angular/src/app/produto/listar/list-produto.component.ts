import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Produto } from 'src/app/model/Produto.model';
import { ProdutoService } from 'src/app/service/produto.service';
//import { SwiperModule } from "swiper/angular";

// interface Country {
//     id?: number;
//     name: string;
//     flag: string;
//     area: number;
//     population: number;
//   }
  
//   const COUNTRIES: Country[] = [
//     {
//       name: 'Russia',
//       flag: 'f/f3/Flag_of_Russia.svg',
//       area: 17075200,
//       population: 146989754
//     }
//   ];


@Component({
  selector: 'app-list-produto',
  templateUrl: './list-produto.component.html',
  styleUrls: ['./list-produto.component.scss']
})
export class ListProdutoComponent implements OnInit {

  // page = 1;
  // pageSize = 4;
  // collectionSize = COUNTRIES.length;
  //  countries!: Country[];

// prods!: Produto[]; 

//-----------------

produtos!: Observable<any>;
filteredProduto!: Produto[];
_produtos!: Produto[];

_filterBy!: string;
_filterBy2!: string;
searchText!: any;


  constructor(
    private produtoService: ProdutoService,
    private router: Router,
  ) {
    // this.refreshProducts();
   }

  ngOnInit(): void {
    this.produtoService.get()
    .subscribe({
      next: users => {
        this._produtos = users;
        this.filteredProduto = this._produtos;
      },
      error: err =>console.log('Error', err)
    });
  }

  // refreshProducts() {
  //   this.prods = this._produtos
  //     .map((filteredProduto, i) => ({d: i + 1, ...filteredProduto}))
  //     .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  // }

  //-----------------service--------------------//
  update(id: number){
    this.router.navigate(['/atualizar', id]);
  }

  delete(prod: Produto){
    console.log(prod)
    this.produtoService.delete(prod.id).subscribe((resposta)=>{
      console.log("resposta ao deletar item", resposta)
      const indexDeletedProd = this._produtos.findIndex((item) => item.id == prod.id)
      this._produtos.splice(indexDeletedProd, 1)
      this.filteredProduto = this._produtos
      this._filterBy = ""

    })
  }

  //-----------------busca------------------------//
  set filter(any: any) {
    this._filterBy = any;
    if (any >= 0){
      this.filteredProduto = this._produtos.filter((any: Produto) => 
                                                              any.id.toString().indexOf(this._filterBy) > -1 ||
                                                              any.preco.toString().indexOf(this._filterBy) > -1
                                            );
    }
    else{
      this.filteredProduto = this._produtos.filter((user: Produto) => 
                                                user.descricao.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1 ||
                                                user.categoria.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1
                                            );
    }
    
  }

  get filter() { 
    return this._filterBy;
  }

  //-------------------------filtro-----------------------------//

  set filter2(any: any) {
    this._filterBy2 = any;
   
      this.filteredProduto = this._produtos.filter((user: Produto) => 
                                                user.categoria.toLocaleLowerCase().indexOf(this._filterBy2.toLocaleLowerCase()) > -1
                                            );
    
  }

  get filter2() { 
    return this._filterBy2;
  }
}
