import { Component, Input } from '@angular/core';
import { ObjectListData } from '@fp-szss/shared/data';

@Component({
	selector: 'fp-szss-projects-list',
	standalone: true,
	imports: [],
	templateUrl: './projects-list.component.html',
	styleUrl: './projects-list.component.scss',
})
export class ProjectsListComponent {
	@Input() dataList!: ObjectListData[] | undefined;

	getImagePath(project: ObjectListData): string {
		return project.imagePath || '';
	}

	hasField(project: ObjectListData, field: keyof ObjectListData): boolean {
		return project[field] != null;
	}
}
