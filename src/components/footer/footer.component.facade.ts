import { inject, Injectable } from '@angular/core';
import { BreakpointService } from '@fp-szss/services';
import { breakpoints } from '@fp-szss/shared/data';
import { combineLatest, map, Observable, startWith, tap } from 'rxjs';

export interface HeaderViewModel {
	isAllDesktops: boolean;
	isMobileScreen: boolean;
}
const initialState: HeaderViewModel = {
	isAllDesktops: false,
	isMobileScreen: false,
};

@Injectable()
export class FooterFacade {
	private breakpoint: BreakpointService = inject(BreakpointService);

	vm$ = this.buildViewModel();

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
}
