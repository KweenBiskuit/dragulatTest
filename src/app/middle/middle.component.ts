import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-middle',
	templateUrl: './middle.component.html',
	styleUrls: ['./middle.component.css']
})
export class MiddleComponent implements OnInit {
	items: string[];

	constructor() { }

	ngOnInit() {
		this.items = ['italien', 'thai', 'pizza', 'burger']
	}

}
