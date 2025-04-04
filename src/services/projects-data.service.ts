import { Injectable } from '@angular/core';
import { ObjectListData, objectsData } from '@fp-szss/shared/data';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class ProjectsDataService {
	private dataSubject = new BehaviorSubject<ObjectListData[]>([]);

	data$ = this.dataSubject.asObservable();

	setProjectsData(tab: string): void {
		const key = this.formatTabKey(tab);
		const data = objectsData[key];

		if (data) {
			this.dataSubject.next(data);
		} else {
			console.warn(`No data found for tab: ${tab}`);
			this.dataSubject.next([]);
		}
	}

	private formatTabKey(tab: string): string {
		return tab.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
	}

	getProjects(): Observable<ObjectListData[]> {
		return this.data$;
	}
}
