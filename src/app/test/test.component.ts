import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {

 title = 'Landing Page';
  noms: String[]=[];
  productId=1;

   constructor(private router: Router) {}

  Onclickville() {
  this.router.navigate(['/products'])

  console.log("OnclickVille ")
  }

  Ajouter(Nouvnom: string) {
    if (Nouvnom) {
      this.noms.push(Nouvnom);
    }
  }

}
