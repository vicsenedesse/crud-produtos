import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from 'src/app/model/Produto.model';
import { ProdutoService } from 'src/app/service/produto.service';
//import { SwiperModule } from "swiper/angular";

@Component({
  selector: 'app-create-produto',
  templateUrl: './create-produto.component.html',
  styleUrls: ['./create-produto.component.scss']
})
export class CreateProdutoComponent implements OnInit {

  // id!: number;
  prod: Produto = new Produto();

  submitted = false;

  constructor(
    private route: ActivatedRoute,
    private produtoService: ProdutoService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
        this.prod.data = "Disponível";
        this.submitted = true;
        this.produtoService.create(this.prod)
        .subscribe(data => console.log(data), error => console.log(error));
        this.prod = new Produto();
        this.router.navigate(['/listagem']);
    
  }

}
