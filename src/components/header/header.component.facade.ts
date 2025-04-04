import { inject, Injectable } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Params, Router } from '@angular/router';
import { BreakpointService } from '@fp-szss/services';
import { breakpoints } from '@fp-szss/shared/data';
import {
	combineLatest,
	filter,
	map,
	Observable,
	startWith,
	tap,
} from 'rxjs';
import {
	NavigationTab,
	routerLinksMap,
} from '../../shared/data/constans';
import { getKeyByValue } from 'src/pages/objects/objects.component.facade';

export interface HeaderViewModel {
	isAllDesktops: boolean;
	isMobileScreen: boolean;
	tab?: NavigationTab;
}
const initialState: HeaderViewModel = {
	isAllDesktops: false,
	isMobileScreen: false,
	tab: NavigationTab.AboutCompany,
};

@Injectable()
export class HeaderFacade {
	private router: Router = inject(Router);
	private breakpoint: BreakpointService = inject(BreakpointService);
	private activeRoute: ActivatedRoute = inject(ActivatedRoute);

	vm$ = this.buildViewModel();

	navigateHome(): void {
		this.router.navigate(['home']);
		return;
	}

	navigateToTab(tab: NavigationTab): void {
		this.router.navigate([routerLinksMap[tab]], {});
	}

	private buildViewModel(): Observable<HeaderViewModel> {
		return combineLatest({
			isAllDesktops: this.breakpoint.getMatches(
				breakpoints.screenAllDesktops,
			),
			isMobileScreen: this.breakpoint.getMatches(
				breakpoints.screenAllMobiles,
			),
			tab: this.getCurrentTab(),
		}).pipe(
			tap((res) => console.log(res)),
			map(({ isAllDesktops, isMobileScreen, tab }) => {
				return {
					isAllDesktops,
					isMobileScreen,
					tab,
				};
			}),
			startWith(initialState),
		);
	}

	getCurrentTab(): Observable<any> {
		return this.router.events.pipe(
			filter((event) => event instanceof NavigationEnd),
			map(() => this.router.url),
			map((url) => {
				const tab = url.split('/').filter(Boolean).shift();

				return getKeyByValue(routerLinksMap, tab as string) || '';
			}),
		);
	}

	openMenuPanel(): void {
		console.log('menu panel is open');
	}
}
