import { Person } from './../models/customer';
import { PersonService } from './../person.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-new-customer',
  templateUrl: './new-customer.component.html',
  styleUrls: ['./new-customer.component.css']
})
export class NewCustomerComponent implements OnInit {
  person:any={};
  id;
  constructor(
    private route:ActivatedRoute,
    private personService:PersonService,
    private router:Router) {

      this.id=this.route.snapshot.paramMap.get('id');
      if(this.id){
        this.personService.get(this.id).valueChanges().subscribe(x=>{
          this.person=x;
        })
      }
    }

  ngOnInit(): void {
  }

  save(person){
    if(this.id){
      this.personService.update(this.id,person);
    }
    else{
      this.personService.create(person);
    }
    this.router.navigate(['']);
  }

  
}
