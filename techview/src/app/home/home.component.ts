import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { startWith, switchMap, tap, debounceTime } from 'rxjs/operators';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  //Loaders
  toppingList: string[] = ['Extra cheese','Peixe','Arroz','Sushi','Macarrão','Pera','Tomate','Extrato','Azeitona','Feijão','Azeite','Cuzcuz','Galinha'];
  toppingControl = new FormControl();
  filteredToppings: Observable<string[]>;
  page = new BehaviorSubject<number>(1);
  toppings = new FormControl();
  
  ngOnInit(): void {}


  constructor() {
    this.filteredToppings = this.toppingControl.valueChanges.pipe(
      startWith(''),
      debounceTime(300),
      switchMap(value => this.loadToppings(value, this.page.value)),
      tap(() => this.page.next(this.page.value + 1))
    );
  }

  loadToppings(value: string, page: number): Observable<string[]> {
    // replace this with your actual data loading logic
    const start = (page - 1) * 10;
    const end = start + 10;
    return of(this.toppingList.filter(topping => topping.startsWith(value)).slice(start, end));
  }

  onScroll(index: number) {
    if (index + 10 >= this.page.value * 10) {
      this.toppingControl.setValue(this.toppingControl.value);
    }
  }
}