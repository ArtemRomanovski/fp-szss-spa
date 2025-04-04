import { inject, Injectable } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Params, Router } from '@angular/router';
import { BreakpointService, ProjectsDataService } from '@fp-szss/services';
import { breakpoints, ObjectListData } from '@fp-szss/shared/data';
import {
	combineLatest,
	filter,
	map,
	Observable,
	of,
	startWith,
	switchMap,
} from 'rxjs';
import { ObjectsTab, routerLinksMap, tabs } from './constans';

export interface ObjectsViewModel {
	isAllDesktops: boolean;
	isMobileScreen: boolean;
	tab?: any;
	projects?: ObjectListData[];
}
const initialState: ObjectsViewModel = {
	isAllDesktops: false,
	isMobileScreen: false,
	tab: null,
	projects: [],
};

@Injectable()
export class ObjectsFacade {
	private router: Router = inject(Router);
	private activatedRoute: ActivatedRoute = inject(ActivatedRoute);
	private breakpoint: BreakpointService = inject(BreakpointService);
	private projectsDataService: ProjectsDataService =
		inject(ProjectsDataService);

	vm$ = this.buildViewModel();

	navigateHome(): void {
		this.router.navigate(['home']);
		return;
	}

	navigateToTab(tab: ObjectsTab): void {
		this.router.navigate([routerLinksMap[tab]], {
			relativeTo: this.activatedRoute,
		});
	}
	//.pipe(startWith(initialState.tab))
	private buildViewModel(): Observable<ObjectsViewModel> {
		return this.getTab().pipe(
			switchMap((tab) => {
				if (!tab) {
					return of({
						...initialState,
					});
				}
				this.projectsDataService.setProjectsData(tab);

				return combineLatest([
					this.getProjectsData(),
					this.breakpoint.getMatches(breakpoints.screenAllDesktops),
					this.breakpoint.getMatches(breakpoints.screenAllMobiles),
				]).pipe(
					map(([projects, isAllDesktops, isMobileScreen]) => {
						console.log('projects: ', projects);
						console.log('tab: ', tab);

						return {
							projects,
							tab,
							isAllDesktops,
							isMobileScreen,
						};
					}),
				);
			}),
			startWith(initialState),
		);
	}

	private getTab(): Observable<string> {
		return this.router.events.pipe(
			filter((event) => event instanceof NavigationEnd),
			map((route) => {
				const lastSegment = route.url.split('/').pop();

				if (!lastSegment) {
					this.navigateHome();
				}

				return (
					getKeyByValue(routerLinksMap, lastSegment as string) || ''
				);
			}),
		);
	}

	private getProjectsData(): Observable<any | null> {
		return this.projectsDataService.getProjects();
	}

	openMenuPanel(): void {
		console.log('menu panel is open');
	}
}

export function getKeyByValue(
	obj: Record<string, string>,
	value: string,
): string | undefined {
	return Object.entries(obj).find(([_, val]) => val === value)?.[0];
}
