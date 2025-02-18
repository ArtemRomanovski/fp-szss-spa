import { Component } from '@angular/core';

@Component({
	selector: 'fp-szss-construction-control',
	standalone: true,
	imports: [],
	templateUrl: './construction-control.component.html',
	styleUrl: './construction-control.component.scss',
})
export class ConstructionControlComponent {

	ngOnDestroy() {
		console.log('ConstructionControlComponent уничтожен');
	}
}
