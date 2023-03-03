import { Component, OnDestroy} from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { filter, map, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [
  ]
})
export class BreadcrumbsComponent implements OnDestroy  {
  
  public title = '';

  private onDestroy$ = new Subject<void>();

  constructor(private router: Router) {
    this.getRouteArguments();
  }
  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

  getRouteArguments(): void {
    this.router.events.pipe(
      filter((event): event is ActivationEnd => event instanceof ActivationEnd),
      filter((event: ActivationEnd) => event.snapshot.firstChild === null),
      map((event: ActivationEnd) => event.snapshot.data),
      takeUntil(this.onDestroy$)
    )
    .subscribe( ({ title= 'Page' }) => {
      this.title = title;
      document.title = `AdminPro | ${title}`;
    })
  }

}
