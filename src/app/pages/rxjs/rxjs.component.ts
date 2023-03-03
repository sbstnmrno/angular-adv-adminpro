import { Component, OnInit } from '@angular/core';
import { Observable, retry } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent implements OnInit {

  constructor() { 



    this.returnObservable().pipe(
      retry()
    )
    .subscribe({
      next: (value) => console.log(value),
      error: (error) => console.error(error),
      complete: () => console.log('Completed')
    })

  }

  ngOnInit(): void {
  }

  returnObservable(): Observable<number> {
    let i = -1;
    return new Observable(  observer => {

      const interval = setInterval( () => {

        i++;
        if( i === 4 ) {
          clearInterval(interval);
          observer.complete();
        }

        if( i === 2 ) {
          observer.error( 'Invalid interval');
        }

      }, 1000)

    });
  }

}
