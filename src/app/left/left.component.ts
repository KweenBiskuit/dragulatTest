import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-left',
	templateUrl: './left.component.html',
	styleUrls: ['./left.component.css']
})
export class LeftComponent implements OnInit {
	items: string[];

	constructor() { }

	ngOnInit() {
		this.items = ['pomme', 'pêche', 'poire', 'abricot']
	}

}
