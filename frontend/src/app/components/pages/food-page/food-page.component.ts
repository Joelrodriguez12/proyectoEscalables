import { Component } from '@angular/core';
import { Food } from 'src/app/shared/models/Food';
import { FoodService } from 'src/app/services/food.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { User } from 'src/app/shared/models/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css']
})
export class FoodPageComponent {
  food!: Food;
  user!:User;
  constructor(activatedRoute: ActivatedRoute, foodService: FoodService, private cartService: CartService, private router: Router
    ,private userService:UserService) {
      activatedRoute.params.subscribe(params => {
      if(params['id'])
      foodService.getFoodById(params.id).subscribe(serverfood => this.food = serverfood);
    })

    userService.userObservable.subscribe((newUser) => {
      this.user = newUser;
    })
  }

  addtoCart(){
    this.cartService.addToCart(this.food);
    this.router.navigateByUrl('/cart-page')
  }

  get isAuth(){
    return this.user.token;
  }
}
