import { InsideComponent } from './inside/inside.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MiddleComponent } from './middle.component';
import { DragulaModule } from 'ng2-dragula/components/dragular.module';

@NgModule({
	imports: [
		CommonModule,
		DragulaModule
	],
	declarations: [MiddleComponent, InsideComponent],
	exports: [MiddleComponent]
})
export class MiddleModule { }
