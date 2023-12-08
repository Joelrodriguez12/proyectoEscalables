import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchTerm='';
  constructor(activatedroute:ActivatedRoute, private router:Router) { 
    activatedroute.params.subscribe(params => {
      if(params.searchTerm){
        this.searchTerm = params.searchTerm;
      }
    });
  }


  search(term:string){
    this.router.navigateByUrl('/search/'+term);
  }
}
