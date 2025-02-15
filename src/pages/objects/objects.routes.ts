import { Routes } from '@angular/router';

export const objectRoutes: Routes = [
	{
		path: 'bulding',
		loadComponent: () =>
			import('./bulding/bulding.component').then(
				(m) => m.BuldingComponent,
			),
	},
	{
		path: 'constructionControl',
		loadComponent: () =>
			import(
				'./construction-control/construction-control.component'
			).then((m) => m.ConstructionControlComponent),
	},
	{
		path: 'design',
		loadComponent: () =>
			import('./design/design.component').then((m) => m.DesignComponent),
	},
	{
		path: 'maintenanceService',
		loadComponent: () =>
			import('./maintenance-service/maintenance-service.component').then(
				(m) => m.MaintenanceServiceComponent,
			),
	},
	{
		path: 'technicalEquipment',
		loadComponent: () =>
			import('./technical-equipment/technical-equipment.component').then(
				(m) => m.TechnicalEquipmentComponent,
			),
	},
	{
		path: '',
		redirectTo: 'objects',
		pathMatch: 'full',
	},
	{
		path: '**',
		redirectTo: 'objects',
		pathMatch: 'full',
	},
];
