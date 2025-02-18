import { Routes } from '@angular/router';
export const objectRoutes: Routes = [
	{
		path: 'building',
		loadComponent: () =>
			import('./building/building.component').then(
				(m) => m.BuildingComponent,
			),
	},
	{
		path: 'construction-control',
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
		path: 'maintenance-service',
		loadComponent: () =>
			import('./maintenance-service/maintenance-service.component').then(
				(m) => m.MaintenanceServiceComponent,
			),
	},
	{
		path: 'technical-equipment',
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
