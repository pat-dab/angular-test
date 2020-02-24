

import {Component, OnInit} from '@angular/core';
import {AddsService} from '../adds.service';
import {Adds} from '../adds';
import {Router} from '@angular/router';

@Component({
  selector: 'app-adds-add',
  templateUrl: './adds-add.component.html'
})
export class AddsAddComponent implements OnInit {

  adds: Adds;
  errorMessage: string;

  constructor(private addsService: AddsService, private router: Router) {
    this.adds = {} as Adds;
  }

  ngOnInit() {
  }

  onSubmit(adds: Adds) {
    adds.id = null;
    this.addsService.addAdds(adds).subscribe(
      newAdds => {
        this.adds = newAdds;
        this.gotoAddsList();
      },
      error => this.errorMessage = error as any
    );
  }

  gotoAddsList() {
    this.router.navigate(['/adds']);
  }

}
