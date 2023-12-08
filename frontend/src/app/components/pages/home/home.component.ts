import { Component} from '@angular/core';
import { FoodService } from 'src/app/services/food.service';
import { ActivatedRoute } from '@angular/router';
import { Food } from 'src/app/shared/models/Food';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent{

  foods: Food[] = [];
  constructor(private foodService: FoodService, activatedRoute: ActivatedRoute) {
    let foodsObservalbe:Observable<Food[]>;
    activatedRoute.params.subscribe((params) => {
      if (params.searchTerm)
        foodsObservalbe = this.foodService.getAllFoodsbySearchTerm(params.searchTerm);
      else if (params.tag)
        foodsObservalbe = this.foodService.getAllFoodsbyTag(params.tag);
      else
        foodsObservalbe = foodService.getAll();

        foodsObservalbe.subscribe((serverFoods) => {
          this.foods = serverFoods;
        })
    })
  }

    ngOnInit(): void {
    }
}
