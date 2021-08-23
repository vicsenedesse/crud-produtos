import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from 'src/app/model/Produto.model';
import { ProdutoService } from 'src/app/service/produto.service';
//import { SwiperModule } from "swiper/angular";

@Component({
  selector: 'app-update-produto',
  templateUrl: './update-produto.component.html',
  styleUrls: ['./update-produto.component.scss']
})
export class UpdateProdutoComponent implements OnInit {

  id!: number;
  prod!: Produto;

  submitted = false;

  constructor(
    private route: ActivatedRoute,
    private produtoService: ProdutoService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.prod = new Produto();

    this.id = this.route.snapshot.params['id'];
    this.produtoService.getById(this.id)
      .subscribe((data) => {
        console.log(data)
        this.prod = data;
        // this.prod.data = "";
      }, (error: any) => console.log(error));

  }

  onSubmit() {
    this.produtoService.update(this.id, this.prod)
    .subscribe(data => console.log(data), error => console.log(error));
    this.prod = new Produto();
    this.router.navigate(['/listagem'])
    .then(() => {
      window.location.reload();
    });
    
  }

  refresh(): void {
    window.location.reload();
  }

}
