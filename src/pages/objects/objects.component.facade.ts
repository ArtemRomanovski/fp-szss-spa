import { inject, Injectable } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Params, Router } from '@angular/router';
import { BreakpointService } from '@fp-szss/services';
import { breakpoints } from '@fp-szss/shared/data';
import { combineLatest, filter, map, Observable, skip, startWith, tap } from 'rxjs';
import { ObjectsTab, routerLinksMap, tabs } from './constans';
import { Dictionary } from 'src/components/header/constans';

export interface ObjectsViewModel {
	isAllDesktops: boolean;
	isMobileScreen: boolean;
	tab?: any;
}
const initialState: ObjectsViewModel = {
	isAllDesktops: false,
	isMobileScreen: false,
	tab: routerLinksMap[ObjectsTab.Building],
};

@Injectable()
export class ObjectsFacade {
	private router: Router = inject(Router);
	private activatedRoute: ActivatedRoute = inject(ActivatedRoute);
	private breakpoint: BreakpointService = inject(BreakpointService);

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

	private buildViewModel(): Observable<ObjectsViewModel> {
		return combineLatest({
			tab: this.getTab().pipe(startWith(initialState.tab)),
			isAllDesktops: this.breakpoint.getMatches(
				breakpoints.screenAllDesktops,
			),
			isMobileScreen: this.breakpoint.getMatches(
				breakpoints.screenAllMobiles,
			),
		}).pipe(
			startWith(initialState),
			map(({ tab, isAllDesktops, isMobileScreen }) => ({
				tab,
				isAllDesktops,
				isMobileScreen,
			})),
		);
	}

	private getTab(): Observable<string> {
		return this.router.events.pipe(
			filter(event => event instanceof NavigationEnd),
			map((route) => {
				const lastSegment = route.url.split('/').pop();

				if (!lastSegment) {
					this.navigateHome();
				}

				return getKeyByValue(routerLinksMap, lastSegment as string)
					|| routerLinksMap[ObjectsTab.Building];
			}),
		);
	}

	openMenuPanel(): void {
		console.log('menu panel is open');
	}
}

export function getKeyByValue(
	obj: Record<string, string>,
	value: string,
): string | undefined {
	return Object.entries(obj).find(([key, val]) => val === value)?.[0];
}
