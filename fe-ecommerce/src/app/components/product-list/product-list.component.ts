import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from '../../services/product/product.service';
import { Product } from '../../common/product';
import { CurrencyPipe, NgClass } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
@Component({
  selector: 'product-list',
  standalone: true,
  imports: [CurrencyPipe, RouterLink, NgClass],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent implements OnInit{

  products!:Product[];
  currentCategoryId!: number | null;

  pageNumber: number = 0;
  pageSize: number = 10;
  totalElements: number = 0;
  totalPage : number = 1;

  constructor(private productService: ProductService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      params  => {
        this.currentCategoryId = Number(params.get('id'));
        this.listProducts();
      }
    );
  }

  handlePaginate(page : any){
    if (page == 'prev' && this.pageNumber > 0) {
      this.pageNumber--;
      this.listProducts();
    }
    else if(page == 'next' && this.pageNumber < this.totalPage - 1){
      this.pageNumber++;
      this.listProducts();
    }
    else{
      this.pageNumber = page;
      this.listProducts();
    }
  }

  listProducts(){
    if (!this.route.snapshot.paramMap.has('id')) {
      this.currentCategoryId = 1;
    }
    if(this.route.snapshot.paramMap.has('keyword')){
      console.log('search...')
      this.handleSearchProducts();
    }
    else{
      this.handleListProducts();
    }
    
  }

  handleListProducts(){
    this.productService.getProductListPaginate( this.pageNumber,
                                                this.pageSize,
                                                this.currentCategoryId)
                                                .subscribe(
                                                  response => {
                                                    this.products = response._embedded.products;
                                                    this.pageNumber = response.page.number;
                                                    this.pageSize = response.page.size;
                                                    this.totalElements = response.page.totalElements;
                                                    this.totalPage = response.page.totalPages;
                                                  })
  }

  handleSearchProducts(){
    const theKeyWord: string|null = this.route.snapshot.paramMap.get('keyword');
    
    this.productService.getProductSearchList(theKeyWord)
    .subscribe(
      products => this.products = products
    )
  }
}
