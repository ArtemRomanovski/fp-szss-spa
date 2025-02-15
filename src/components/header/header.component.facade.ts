import { inject, Injectable } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { BreakpointService } from '@fp-szss/services';
import { breakpoints } from '@fp-szss/shared/data';
import { combineLatest, map, Observable, skip, startWith, tap } from 'rxjs';
import { NavigationTab, routerLinksMap, tabs } from './constans';

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
		}).pipe(
			tap((res) => console.log(res)),
			map(({ isAllDesktops, isMobileScreen }) => {
				return {
					isAllDesktops,
					isMobileScreen,
				};
			}),
			startWith(initialState),
		);
	}

	openMenuPanel(): void {
		console.log('menu panel is open');
	}
}
