import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
	id: any;
	quantity: any;
	action: any;
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
  	if (this._httpService.selected){
  		this.id = this._httpService.selected.id;
  		this.quantity = this._httpService.selected.quantity;
  		this.action = this._httpService.selected.action;
  	}
  }

}
