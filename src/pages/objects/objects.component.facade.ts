import { inject, Injectable } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { BreakpointService } from '@fp-szss/services';
import { breakpoints } from '@fp-szss/shared/data';
import { combineLatest, map, Observable, skip, startWith, tap } from 'rxjs';
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
		this.router.navigate(['.'], {
			queryParams: { tab: routerLinksMap[tab] },
			relativeTo: this.activatedRoute,
			queryParamsHandling: 'merge',
		});
	}

	private buildViewModel(): Observable<ObjectsViewModel> {
		return combineLatest({
			tab: this.getTab(),
			isAllDesktops: this.breakpoint.getMatches(
				breakpoints.screenAllDesktops,
			),
			isMobileScreen: this.breakpoint.getMatches(
				breakpoints.screenAllMobiles,
			),
		}).pipe(
			map(({ tab, isAllDesktops, isMobileScreen }) => ({
				tab,
				isAllDesktops,
				isMobileScreen,
			})),
			startWith(initialState),
		);
	}

	openMenuPanel(): void {
		console.log('menu panel is open');
	}

	private getTab(): Observable<string> {
		return this.activatedRoute.queryParams.pipe(
			skip(1),
			map<Params, string>(({ tab }) => {
				if (!tab) {
					this.navigateHome();
				}

				return (
					getKeyByValue(routerLinksMap, tab) ||
					routerLinksMap[ObjectsTab.Building]
				);
			}),
		);
	}
}

export function getKeyByValue(
	obj: Record<string, string>,
	value: string,
): string | undefined {
	return Object.entries(obj).find(([key, val]) => val === value)?.[0];
}
