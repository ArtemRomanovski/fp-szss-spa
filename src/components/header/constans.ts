export interface Dictionary<T> {
	[id: string]: T;
}

export enum NavigationTab {
	AboutCompany = 'AboutCompany',
	Objects = 'Objects',
	AreasOfActivity = 'AreasOfActivity',
	Products = 'Products',
	News = 'News',
	JobOpenings = 'JobOpenings',
	Contacts = 'Contacts',
}

export const tabs = [
	NavigationTab.AboutCompany,
	NavigationTab.Objects,
	NavigationTab.AreasOfActivity,
	NavigationTab.Products,
	NavigationTab.News,
	NavigationTab.JobOpenings,
	NavigationTab.Contacts,
];

export const navigationTabMap: Dictionary<string> = {
	[NavigationTab.AboutCompany]: 'О компании',
	[NavigationTab.Objects]: 'Наши объекты',
	[NavigationTab.AreasOfActivity]: 'Направления деятельности',
	[NavigationTab.Products]: 'Продукция',
	[NavigationTab.News]: 'Новости',
	[NavigationTab.JobOpenings]: 'Вакансии',
	[NavigationTab.Contacts]: 'Контакты',
};

export const routerLinksMap: Dictionary<string> = {
	[NavigationTab.AboutCompany]: 'about-company',
	[NavigationTab.Objects]: 'objects',
	[NavigationTab.AreasOfActivity]: 'activity-areas',
	[NavigationTab.Products]: 'products',
	[NavigationTab.News]: 'news',
	[NavigationTab.JobOpenings]: 'job-openings',
	[NavigationTab.Contacts]: 'contacts',
};
