import { Injectable } from '@angular/core';
import { Product } from '../../common/product';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products : Product[] = [];

  constructor() { 
    this.products = [
      {
          "id": 1,
          "sku": "JP-001",
          "name": "Gold Pendant Necklace",
          "description": "A stunning gold pendant necklace with a delicate chain.",
          "unitPrice": 199.99,
          "imageUrl": "https://cloud-media.tous.com/medias/sys_master/images/sys-master/images/h12/hb8/10647313711134/product_018052510-20210125120031/product-018052510-20210125120031.jpg_515Wx515H",
          "active": true,
          "unitsInStock": 15,
          "createdAt": new Date("2024-01-01T09:00:00Z"),
          "updatedAt": new Date("2024-11-24T10:15:00Z")
      },
      {
          "id": 2,
          "sku": "JE-002",
          "name": "Silver Stud Earrings",
          "description": "Elegant silver stud earrings, perfect for everyday wear.",
          "unitPrice": 79.50,
          "imageUrl": "https://http2.mlstatic.com/D_NQ_NP_903636-MCO73414230502_122023-O.webp",
          "active": true,
          "unitsInStock": 50,
          "createdAt": new Date("2024-02-12T09:00:00Z"),
          "updatedAt": new Date("2024-10-15T16:45:00Z")
      },
      {
          "id": 3,
          "sku": "JR-003",
          "name": "Diamond Engagement Ring",
          "description": "A beautiful diamond engagement ring set in white gold.",
          "unitPrice": 2499.99,
          "imageUrl": "https://www.77diamonds.com/image/66609/360/-/-/-/-/-/-/-/104.jpg/-",
          "active": true,
          "unitsInStock": 5,
          "createdAt": new Date("2024-03-01T11:20:00Z"),
          "updatedAt": new Date("2024-11-20T12:30:00Z")
      },
      {
          "id": 4,
          "sku": "JB-004",
          "name": "Pearl Bracelet",
          "description": "A classic pearl bracelet with a silver clasp.",
          "unitPrice": 129.95,
          "imageUrl": "https://www.jared.com/productimages/processed/V-482009709_0_800.jpg?pristine=true",
          "active": true,
          "unitsInStock": 25,
          "createdAt": new Date("2024-04-15T13:00:00Z"),
          "updatedAt": new Date("2024-11-10T14:45:00Z")
      },
      {
          "id": 5,
          "sku": "JE-005",
          "name": "Ruby Drop Earrings",
          "description": "Ruby drop earrings with a sparkling finish.",
          "unitPrice": 299.99,
          "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu20rENgyIfH-UYG_28lw8KlINo-fi8kWchQ&s",
          "active": true,
          "unitsInStock": 30,
          "createdAt": new Date("2024-05-22T08:40:00Z"),
          "updatedAt": new Date("2024-11-12T09:20:00Z")
      },
      {
          "id": 6,
          "sku": "JP-006",
          "name": "Sapphire Pendant",
          "description": "A breathtaking sapphire pendant with a delicate chain.",
          "unitPrice": 599.00,
          "imageUrl": "https://moonmagic.com/cdn/shop/files/PIC-BS-SOLIDWHITE-WN-76_1_428x.jpg?v=1699706586",
          "active": true,
          "unitsInStock": 10,
          "createdAt": new Date("2024-06-30T17:10:00Z"),
          "updatedAt": new Date("2024-11-18T13:35:00Z")
      },
      {
          "id": 7,
          "sku": "JR-007",
          "name": "Emerald Ring",
          "description": "An elegant emerald ring with a classic band.",
          "unitPrice": 799.99,
          "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhll8Pr5wubaEVeKEn3WWVfvikmAbwUkpAqg&s",
          "active": true,
          "unitsInStock": 8,
          "createdAt": new Date("2024-07-18T15:25:00Z"),
          "updatedAt": new Date("2024-11-22T11:50:00Z")
      },
      {
          "id": 8,
          "sku": "JE-008",
          "name": "Gold Hoop Earrings",
          "description": "Stylish gold hoop earrings, suitable for any occasion.",
          "unitPrice": 89.99,
          "imageUrl": "https://m.media-amazon.com/images/I/71HBi1iZYML._AC_SY675_.jpg",
          "active": true,
          "unitsInStock": 40,
          "createdAt": new Date("2024-08-10T12:05:00Z"),
          "updatedAt": new Date("2024-11-21T16:10:00Z")
      },
      {
          "id": 9,
          "sku": "JB-009",
          "name": "Silver Charm Bracelet",
          "description": "A charming silver bracelet with multiple charms.",
          "unitPrice": 199.95,
          "imageUrl": "https://m.media-amazon.com/images/I/61Y+q9c42oL._AC_UY1000_.jpg",
          "active": true,
          "unitsInStock": 20,
          "createdAt": new Date("2024-09-03T10:15:00Z"),
          "updatedAt": new Date("2024-11-19T14:25:00Z")
      },
      {
          "id": 10,
          "sku": "JP-010",
          "name": "Amethyst Necklace",
          "description": "A stunning amethyst necklace with a gold chain.",
          "unitPrice": 349.00,
          "imageUrl": "https://m.media-amazon.com/images/I/711Mml83XML._AC_SY695_.jpg",
          "active": true,
          "unitsInStock": 18,
          "createdAt": new Date("2024-10-25T09:50:00Z"),
          "updatedAt": new Date("2024-11-24T09:00:00Z")
      }
  ]
  
  }

  getProductList(theCategoryId : number | null): Product[] {

    return this.products;
  }

  getProductListPaginate(): Product[] {
    return this.products;
  }

  getProductSearchList(input : string | null): Product[]{    
    if(!input){
      return [];
    }

    return this.products.filter(p => p.name.includes(input));
  }

  getProduct(id : string | null): Product{
    const value = id ? parseInt(id) : 1;
    const product = this.products.find(product => product.id === value);
    return product? product : new Product(0, "", "", "", 0, "", false, 0, new Date(), new Date());
  }
}

