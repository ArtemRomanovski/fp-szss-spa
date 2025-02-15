import { Injectable } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { distinctUntilChanged, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BreakpointService extends BreakpointObserver {
	getMatches(breakpoints: string | readonly string[]): Observable<boolean> {
		return this.observe(breakpoints).pipe(
			map(breakPointState => !!breakPointState.matches),
			distinctUntilChanged(),
		);
	}
}
