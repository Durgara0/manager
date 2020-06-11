import { async } from '@angular/core/testing';
import { Person } from './../models/customer';
import { map ,switchMap} from 'rxjs/operators';
import { PersonService } from './../person.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Key } from 'protractor';
import { isString } from 'util';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent  implements OnDestroy{
  customers:Person[];
  filteredCustomers:Person[];
  filterSave=(localStorage.getItem('saveFilter')==='true')?true:false;
  queryValue:string=(this.filterSave)?localStorage.getItem('query'):'';
  categoryValue=(this.filterSave)?localStorage.getItem('category'):'firstName';
  subscription;


  constructor(
    private router:Router,
    private personService:PersonService) {
      
    this.subscription=this.personService.getAll()
    .subscribe((x)=>{
     this.customers=x.map<any>(y=>y.payload.val());

      x.forEach((cur,ind)=>{
        this.customers[ind].key=cur.key;
      });
      this.filteredCustomers=this.customers;

      if(localStorage.getItem('saveFilter')==='true'){   
        this.queryValue=localStorage.getItem('query');
        this.filter(this.queryValue,localStorage.getItem('category'));
      }
    });  
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
    localStorage.setItem('query',this.queryValue);
    localStorage.setItem('category',this.categoryValue);
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


  changeFocus(input,s:HTMLSelectElement){
    input.focus();
  }

  onFilterSave(query){
    localStorage.setItem('saveFilter','true');
    this.filterSave=true;
  }

  onFilterDontSave(){
    localStorage.setItem('saveFilter','false');
    this.filterSave=false;
  }

}
