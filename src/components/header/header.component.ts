import { Component, inject } from '@angular/core';
import { BreakpointService } from '@fp-szss/services';
import { breakpointMap, breakpoints } from '@fp-szss/shared/data';
import { combineLatest, map, Observable, startWith, tap } from 'rxjs';
import { HeaderFacade } from './header.component.facade';
import { CommonModule } from '@angular/common';
import {
	NavigationTab,
	navigationTabMap,
	tabs,
} from '../../shared/data/constans';
import { trackByValue } from '@fp-szss/shared/utils';

@Component({
	selector: 'fp-szss-header',
	standalone: true,
	imports: [CommonModule],
	providers: [HeaderFacade],
	templateUrl: './header.component.html',
	styleUrl: './header.component.scss',
})
export class HeaderComponent {
	private facade: HeaderFacade = inject(HeaderFacade);

	readonly vm$ = this.facade.vm$;

	readonly tabs = tabs;
	readonly tabsName = navigationTabMap;
	readonly trackByValue = trackByValue;

	navigateHome(): void {
		this.facade.navigateHome();
	}

	navigateToTab(tab: NavigationTab): void {
		this.facade.navigateToTab(tab);
	}

	openMenuPanel(event: Event): void {
		if (event) {
			event.stopPropagation();
		}
		this.facade.openMenuPanel();
	}
}
