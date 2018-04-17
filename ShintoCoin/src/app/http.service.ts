import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {
	value = 1;
	owned = 0;
	money = 0;
	answered = false;
	log = [];
	selected: any;
  constructor(private _http: HttpClient) { }

  getValue(){
  	return this.value;
  }
  getOwned(){
  	return this.owned;
  }
  getMoney(){
  	return this.money;
  }
}
