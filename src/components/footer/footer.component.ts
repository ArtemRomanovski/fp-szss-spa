import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationTab, navigationTabMap, routerLinksMap, tabs } from 'src/shared/data/constans';
import { FooterFacade } from './footer.component.facade';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'fp-szss-footer',
	standalone: true,
	imports: [CommonModule],
	providers: [FooterFacade],
	templateUrl: './footer.component.html',
	styleUrl: './footer.component.scss',
})
export class FooterComponent {
	readonly tabs = tabs;
	readonly tabsName = navigationTabMap;

	private router: Router = inject(Router);
	private facade: FooterFacade = inject(FooterFacade);

	readonly vm$ = this.facade.vm$;
	
	navigateToTab(tab: NavigationTab): void {
		this.router.navigate([routerLinksMap[tab]], {});
	}
}
