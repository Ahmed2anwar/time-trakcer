import { Component } from '@angular/core';
import { ServicesService } from 'src/app/services.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  products: any = [];
  colors: string[] = ['#FF8B64', '#55C2E6', '#FF5E7D', '#FF8B64', '#55C2E6', '#F1C75B', "#7335D2" , "#4BCF82" ,'#7335D2'];

  colorIndex: number = 0;

  constructor(private _ServicesService: ServicesService){

  }
  ngOnInit(): void {
    this.getAllProducts();
  }
  getAllProducts() {

    this._ServicesService.getProducts().subscribe((response) => {
      this.products = response;
      console.log(this.products);


    });
  }
  getRandomColor():string {
    return this.colors[Math.floor(Math.random() * this.colors.length)];
  }
}
