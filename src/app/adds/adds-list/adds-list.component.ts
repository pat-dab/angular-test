
import { Component, OnInit } from '@angular/core';
import { AddsService } from '../adds.service';
import { Adds } from '../adds';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adds-list',
  templateUrl: './adds-list.component.html'
})
export class AddsListComponent implements OnInit {
  errorMessage: string;
  adds: Adds[];
  filteredAdds: Adds[];
  _listFilter = '';
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredAdds = this.listFilter ? this.doFilter(this.listFilter) : this.adds;

  }
  doFilter(filterBy: string): Adds[] {
    return this.adds.filter((add: Adds) =>
      add.price.indexOf(filterBy) !== -1);
  }


  constructor(private router: Router, private addsService: AddsService) {
    this.filteredAdds = this.adds;
    this.listFilter = '';
  }

  ngOnInit() {
    this.addsService.getAdds().subscribe(
      adds => this.adds = adds,  filteredAdds => this.filteredAdds = filteredAdds);
  }

  onSelect(adds: Adds) {
    this.router.navigate(['/adds', adds.id]);
  }

  addAdds() {
    this.router.navigate(['/adds/add']);
  }

}
