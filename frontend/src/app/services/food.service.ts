import { Injectable } from '@angular/core';
import { Food } from '../shared/models/Food';
import { sample_foods,sample_tags } from '../data';
import { Tag } from '../shared/models/Tags';
import { Observable, sample } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { FOODS_BY_ID_URL, FOODS_BY_SEARCH_URL, FOODS_BY_TAG_URL, FOODS_CREATE, FOODS_TAGS_URL, FOODS_URL } from '../shared/constants/urls';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private http:HttpClient) { }

  getAll(): Observable<Food[]>{
    return this.http.get<Food[]>(FOODS_URL);
  }

  getAllFoodsbySearchTerm(searchTerm:string): Observable<Food[]>{
    return this.http.get<Food[]>(FOODS_BY_SEARCH_URL + searchTerm);
  }

  getAllTags(): Observable<Tag[]>{
    return this.http.get<Tag[]>(FOODS_TAGS_URL);
  }

  getAllFoodsbyTag(tag:string):Observable<Food[]>{
    return tag === 'All'?
    this.getAll() :
    this.http.get<Food[]>(FOODS_BY_TAG_URL + tag);
  }

  getFoodById(id:string):Observable<Food>{
    return this.http.get<Food>(FOODS_BY_ID_URL + id);
  }


  create(food:Food){
    return this.http.post<Food>(FOODS_CREATE, food);
  }

  delete(id:string):Observable<any>{
    return this.http.delete(FOODS_BY_ID_URL + id);
  }
}
