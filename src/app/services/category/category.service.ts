import { Injectable } from '@angular/core';
import { Category } from '../../common/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  categories : Category[] = [];
  constructor() {
    this.categories = [
      {
        "id": 1,
        "name": "Rings",
      },
      {
        "id": 2,
        "name": "Bracelets",
      },
      {
        "id": 3,
        "name": "Earrings",
      },
      {
        "id": 4,
        "name": "Necklaces",
      },
      {
        "id": 5,
        "name": "Watches",
      }
    ]
   }

  getCategories() : Category[]{
    return this.categories;  
  }
}
