import { async } from '@angular/core/testing';
import { Person } from './../models/customer';
import { map ,switchMap} from 'rxjs/operators';
import { PersonService } from './../person.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Key } from 'protractor';
import { isString } from 'util';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  customers:Person[];
  filteredCustomers:Person[];
  constructor(
    private router:Router,
    private personService:PersonService) {
    
    this.personService.getAll()
    .subscribe((x)=>{
       this.customers=x.map<any>(y=>y.payload.val());

      x.forEach((cur,ind)=>{
        this.customers[ind].key=cur.key;
      });
      this.filteredCustomers=this.customers;
    });
  }

  ngOnInit(): void {
  }
  filter(query,s){    
    this.filteredCustomers=(query)? this.customers.filter(x=>(x[s] as string).toLowerCase().includes(query.toLowerCase())) :this.customers;
  }

  delete(personId,firstName){
    if(confirm("Are you sure you want to delete this product")){
      this.personService.delete(personId);
      this.router.navigate(['']);
    }

  }

  changeFocus(input){
    input.focus();
  }

}
