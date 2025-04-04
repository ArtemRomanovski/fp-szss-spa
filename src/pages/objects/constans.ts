import { Dictionary } from 'src/shared/data/constans';

export enum ObjectsTab {
	Building = 'building',
	ConstructionControl = 'constructionControl',
	Design = 'design',
	MaintenanceService = 'maintenanceService',
	TechnicalEquipment = 'technicalEquipment',
}

export const tabs = [
	ObjectsTab.Design,
	ObjectsTab.Building,
	ObjectsTab.TechnicalEquipment,
	ObjectsTab.ConstructionControl,
	ObjectsTab.MaintenanceService,
];

export const objectsTabMap: Dictionary<string> = {
	[ObjectsTab.Building]: 'Строительство',
	[ObjectsTab.ConstructionControl]: 'Строительный контроль',
	[ObjectsTab.Design]: 'Проектирование',
	[ObjectsTab.MaintenanceService]: 'Техническое обслуживание',
	[ObjectsTab.TechnicalEquipment]: 'Техническое оснащение',
};

export const routerLinksMap: Dictionary<string> = {
	[ObjectsTab.Building]: 'building',
	[ObjectsTab.ConstructionControl]: 'construction-control',
	[ObjectsTab.Design]: 'design',
	[ObjectsTab.MaintenanceService]: 'maintenance-service',
	[ObjectsTab.TechnicalEquipment]: 'technical-equipment',
};
