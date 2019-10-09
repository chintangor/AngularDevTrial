import { Component, OnInit } from '@angular/core';
import { ProductsService } from './../products.service';
@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.css']
})
export class ProjectsListComponent implements OnInit {

  public products: Array<{ title: string, price: string, description: string, image: string }>;

  constructor(private ProductsService: ProductsService) { }

  ngOnInit() {
    this.ProductsService.getJSON().subscribe(data => {
      this.products = Object.keys(data).map(key => (data[key]));
    });
  }

}
