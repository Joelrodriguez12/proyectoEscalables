import { Component } from '@angular/core';
import { Food } from 'src/app/shared/models/Food';
import { FoodService } from 'src/app/services/food.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { User } from 'src/app/shared/models/User';
import { UserService } from 'src/app/services/user.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent {
  foods: Food[] = [];
  user!:User;

  constructor(activatedRoute: ActivatedRoute, private foodService: FoodService, private router: Router
    ,private userService:UserService) {
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

    userService.userObservable.subscribe((newUser) => {
      this.user = newUser;
    })
  }

  get isAuth(){
    return this.user.token;
  }

  get userInfo(){
    return this.user.name;
  }

  deleteFood(id: string) {
    const food = this.foods.find(f => f.id === id);
    
    if (food) {
      // Lógica para eliminar la comida
      this.foodService.delete(food.id).subscribe(() => {
        // Eliminar la comida de la lista local
        const index = this.foods.findIndex(f => f.id === food.id);
        if (index !== -1) {
          this.foods.splice(index, 1);
        }
      });
    }
  }



  

}

