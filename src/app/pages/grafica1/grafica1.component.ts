import { Component } from '@angular/core';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component {

  public labels1: string[] = [ 'Download Sales', 'In-Store Sales', 'Mail-Order Sales' ];
  public data1: number[] = [ 450, 860, 140 ];

  public labels2: string[] = [ 'Burgers', 'Hotdogs', 'Pizzas' ];
  public data2: number[] = [ 1230, 430, 870 ];

  public labels3: string[] = [ 'Ketchup', 'Mayo', 'Mustard' ];
  public data3: number[] = [ 230, 650, 870 ];

  public labels4: string[] = [ 'Soda', 'Tea', 'Water' ];
  public data4: number[] = [ 740, 780, 120 ];

}
