import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-incrementer',
  templateUrl: './incrementer.component.html',
  styles: [
  ]
})
export class IncrementerComponent {

  @Input() progress: number = 50;
  @Input() btnClass: string = 'btn-primary';

  @Output() change = new EventEmitter<number>();

  get percentaje(): string {
    return `${this.progress}%`;
  }

  get btnClasses(): string {
    return `btn ${this.btnClass}`
  }

  changeValue(value: number): void {
    if ((this.progress >= 100 && value >= 0) || (this.progress <= 0 && value <= 0)) {
      this.change.emit(this.progress);
      return;
    }
    this.progress = this.progress + value;
    this.change.emit(this.progress);
  }

  onChange(value: number): void {
    if ( value >= 100 ) {
      this.progress = 100;
    } 
    if ( value <= 0 ) {
      this.progress = 0;
    } else {
      this.progress = value;
    }
    
    this.change.emit(this.progress);
  }


}
