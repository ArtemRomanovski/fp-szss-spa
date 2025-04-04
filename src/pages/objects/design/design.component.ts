import { Component } from '@angular/core';
import { ProjectsListComponent } from 'src/components/projects-list/projects-list.component';

@Component({
	selector: 'fp-szss-design',
	standalone: true,
	imports: [ProjectsListComponent],
	templateUrl: './design.component.html',
	styleUrl: './design.component.scss',
})
export class DesignComponent {}
