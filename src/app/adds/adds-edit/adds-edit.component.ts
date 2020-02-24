
import { Component, OnInit } from '@angular/core';
import { AddsService } from '../adds.service';
import { Adds } from '../adds';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-adds-edit',
  templateUrl: './adds-edit.component.html'
})
export class AddsEditComponent implements OnInit {
  adds: Adds;
  errorMessage: string; // server error message

  constructor(private addsService: AddsService, private route: ActivatedRoute, private router: Router) {
    this.adds = {} as Adds;
  }

  ngOnInit() {
    const addsId = this.route.snapshot.params.id;
    this.addsService.getAddsById(addsId).subscribe(
      adds => this.adds = adds,
      error => this.errorMessage = error as any);
  }

  onSubmit(adds: Adds) {
    const that = this;
    this.addsService.updateAdds(adds.id.toString(), adds).subscribe(
      res => this.gotoAddsDetail(adds),
      error => this.errorMessage = error as any
    );
  }

  gotoAddsDetail(adds: Adds) {
    this.errorMessage = null;
    this.router.navigate(['/adds', adds.id]);
  }

}
