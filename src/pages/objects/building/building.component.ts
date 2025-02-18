import { Component, OnDestroy } from '@angular/core';

@Component({
	selector: 'fp-szss-building',
	standalone: true,
	imports: [],
	templateUrl: './building.component.html',
	styleUrl: './building.component.scss',
})
export class BuildingComponent implements OnDestroy {

	ngOnDestroy() {
		console.log('BuildingComponent уничтожен');
	}

}
