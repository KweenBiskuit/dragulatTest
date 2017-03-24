import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-right',
	templateUrl: './right.component.html',
	styleUrls: ['./right.component.css']
})
export class RightComponent implements OnInit {
	items: string[];

	constructor() { }

	ngOnInit() {
		this.items = ['auto', 'moto', 'voiture', 'avion']
	}

}
