import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PeopleService } from '../services/people.service';

@Component({
  selector: 'app-people-delete',
  templateUrl: './people-delete.component.html'
})
export class PeopleDeleteComponent implements OnInit {
  person: any = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private peopleService: PeopleService
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.peopleService.getPerson(id).subscribe(data => {
      this.person = data;
    });
  }

  delete(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.peopleService.deletePerson(id).subscribe(() => {
      this.router.navigate(['/people']);
    });
  }
}
