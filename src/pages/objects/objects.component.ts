import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ObjectsTab, objectsTabMap, routerLinksMap, tabs } from './constans';
import { trackByValue } from '@fp-szss/shared/utils';
import { CommonModule } from '@angular/common';
import { ObjectsFacade } from './objects.component.facade';
import { BuldingComponent } from './bulding/bulding.component';
import { ConstructionControlComponent } from './construction-control/construction-control.component';
import { DesignComponent } from './design/design.component';
import { MaintenanceServiceComponent } from './maintenance-service/maintenance-service.component';
import { TechnicalEquipmentComponent } from './technical-equipment/technical-equipment.component';

@Component({
	selector: 'fp-szss-objects',
	standalone: true,
	imports: [
		CommonModule,
		BuldingComponent,
		ConstructionControlComponent,
		DesignComponent,
		MaintenanceServiceComponent,
		TechnicalEquipmentComponent,
	],
	providers: [ObjectsFacade],
	templateUrl: './objects.component.html',
	styleUrl: './objects.component.scss',
})
export class ObjectsComponent {
	private facade: ObjectsFacade = inject(ObjectsFacade);

	readonly vm$ = this.facade.vm$;

	readonly tabs = tabs;
	readonly tabsName = objectsTabMap;
	readonly trackByValue = trackByValue;

	navigateToTab(tab: ObjectsTab): void {
		this.facade.navigateToTab(tab);
	}
}
