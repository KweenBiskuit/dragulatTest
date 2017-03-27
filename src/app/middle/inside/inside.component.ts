import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-inside',
	templateUrl: './inside.component.html',
	styleUrls: ['./inside.component.css']
})
export class InsideComponent implements OnInit {

	items: string[];

	constructor() { }

	ngOnInit() {
		this.items = ['inside', 'inside', 'inside', 'inside']
	}

}
