import { Component, OnDestroy } from '@angular/core';
import { ProjectsListComponent } from 'src/components/projects-list/projects-list.component';

@Component({
	selector: 'fp-szss-building',
	standalone: true,
	imports: [ProjectsListComponent],
	templateUrl: './building.component.html',
	styleUrl: './building.component.scss',
})
export class BuildingComponent implements OnDestroy {

	ngOnDestroy() {
		console.log('BuildingComponent уничтожен');
	}
}
