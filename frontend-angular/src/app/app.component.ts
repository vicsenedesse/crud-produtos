import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
// import { mask } from 'jquery-mask-plugin';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'frontend-angular';

  ngOnInit(){
    // $(document).ready(function(){
    //   $('#preco').mask('R$ 000.000,00');
    // });
      $('#preco').mask('R$ 000.000,00');
  }

}
