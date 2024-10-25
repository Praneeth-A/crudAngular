import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PeopleService } from '../services/people.service';

@Component({
  selector: 'app-people-edit',
  templateUrl: './people-edit.component.html'
})
export class PeopleEditComponent implements OnInit {
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

  save(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.peopleService.updatePerson(id, this.person).subscribe(() => {
      this.router.navigate(['/people']);
    });
  }
}
