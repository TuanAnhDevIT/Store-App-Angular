import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatSelectionListChange } from '@angular/material/list';

@Component({
  selector: 'app-filters',
  templateUrl: 'filters.component.html'
})
export class FiltersComponent implements OnInit {
  @Output() showCategory = new EventEmitter<string>();

  categories = ['shoes', 'sports'];

  constructor() { }

  ngOnInit(): void {

  }

  onShowCategory(event: MatSelectionListChange): void {
    console.log("", event)
    this.showCategory.emit(event.options[0].value);
  }
}
