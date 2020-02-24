

import { Component, OnInit } from '@angular/core';
import { AddsService } from '../adds.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Adds } from '../adds';


@Component({
  selector: 'app-adds-detail',
  templateUrl: './adds-detail.component.html'
})
export class AddsDetailComponent implements OnInit {
  errorMessage: string;
  adds: Adds;

  constructor(private route: ActivatedRoute, private router: Router, private addsService: AddsService) {
    this.adds = {} as Adds;
  }

  ngOnInit() {
    const addsId = this.route.snapshot.params.id;
    this.addsService.getAddsById(addsId).subscribe(
      adds => this.adds = adds,
      error => this.errorMessage = error as any);
  }

  gotoAddsList() {
    this.router.navigate(['/adds']);
  }

  editAdds() {
    this.router.navigate(['/adds', this.adds.id, 'edit']);
  }
  deleteAdds() {
    const that = this;
    this.addsService.deleteAdds(this.route.snapshot.params.id).subscribe(
      error => this.errorMessage = error as any
    );
    this.router.navigate(['/adds']);
  }




}
