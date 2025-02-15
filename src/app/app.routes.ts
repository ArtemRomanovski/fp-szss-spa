import { Routes } from '@angular/router';
import { objectRoutes } from '@fp-szss/pages';

export const routes: Routes = [
	{
		path: 'home',
		loadComponent: () =>
			import('@fp-szss/pages').then((m) => m.HomeComponent),
	},
	{
		path: 'about-company',
		loadComponent: () =>
			import('@fp-szss/pages').then((m) => m.AboutComponent),
	},
	{
		path: 'objects',
		loadComponent: () =>
			import('@fp-szss/pages').then((m) => m.ObjectsComponent),
		children: objectRoutes,
	},
	{
		path: 'activity-areas',
		loadComponent: () =>
			import('@fp-szss/pages').then((m) => m.AreasOfActivityComponent),
	},
	{
		path: 'products',
		loadComponent: () =>
			import('@fp-szss/pages').then((m) => m.ProductsComponent),
	},
	{
		path: 'news',
		loadComponent: () =>
			import('@fp-szss/pages').then((m) => m.NewsComponent),
	},
	{
		path: 'job-openings',
		loadComponent: () =>
			import('@fp-szss/pages').then((m) => m.VacanciesComponent),
	},
	{
		path: 'contacts',
		loadComponent: () =>
			import('@fp-szss/pages').then((m) => m.ContactsComponent),
	},
	{
		path: '',
		redirectTo: 'home',
		pathMatch: 'full',
	},
	{
		path: '**',
		redirectTo: 'home',
		pathMatch: 'full',
	},
];
