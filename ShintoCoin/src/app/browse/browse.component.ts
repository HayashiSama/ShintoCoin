import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {
	log = [];
    constructor(private _httpService: HttpService
    private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
  	this.log = this._httpService.log;
  }

  viewDetail(id){
  	console.log(id)
  	for(var i = 0; i < this._httpService.log.length; i ++)
  	{
  		if(this._httpService.log[i].id === id){
  			this._httpService.selected = this._httpService.log[i];
  		}
  	}
  	
  	this._router.navigate(['/transaction']
  }

}
