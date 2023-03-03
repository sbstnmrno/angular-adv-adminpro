import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styles: [
  ]
})
export class PromisesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.getUsers().then(console.log);
  }

  getUsers() {
    return new Promise( resolve => {
      fetch('https://reqres.in/api/users')
        .then( res => res.json())
        .then( body => resolve(body.users))
    });
  }

}
