import { Component } from '@angular/core';
import { ProductslistService } from '../../core/services/productslist.service';
import { OnInit } from '@angular/core';
import { Product } from '../../core/interfaces/product';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  allProducts:Product[] = [];
  constructor(private _ProductslistService:ProductslistService) {}
  ngOnInit(){
    this.getProducts();
  }
  getProducts(){
    this._ProductslistService.getProducts().subscribe({
      next:(response)=>{
        this.allProducts = response.data;}
    });
}
}
