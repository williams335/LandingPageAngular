import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
product;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
  this.route.paramMap.subscribe(params => {
    this.product = params.get('name');
  });
  }

}
