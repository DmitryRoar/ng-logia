import { Component, DoCheck, OnInit } from '@angular/core';
import { IProduct, ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  providers: [ProductService],
})
export class ProductListComponent implements OnInit, DoCheck {
  menu!: IProduct[];
  imgSrc!: string;
  loading = true;

  constructor(private productService: ProductService) {}

  onPreviewImage(event: any) {
    const target = event.target || event.srcElement || event.currentTarget;
    const srcAttr = target.attributes.src;
    this.imgSrc = srcAttr.nodeValue;
  }

  ngDoCheck(): void {
    if (this.imgSrc) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }

  onClosePreview() {
    this.imgSrc = '';
  }

  ngOnInit(): void {
    this.productService.getAll().subscribe({
      next: (data) => {
        this.menu = data;
        this.loading = false;
      },
    });
  }
}
