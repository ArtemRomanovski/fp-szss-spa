import { Dictionary } from 'src/components/header/constans';

export enum ObjectsTab {
	Building = 'building',
	ConstructionControl = 'constructionControl',
	Design = 'design',
	MaintenanceService = 'maintenanceService',
	TechnicalEquipment = 'technicalEquipment',
}

export const tabs = [
	ObjectsTab.Building,
	ObjectsTab.ConstructionControl,
	ObjectsTab.Design,
	ObjectsTab.MaintenanceService,
	ObjectsTab.TechnicalEquipment,
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
