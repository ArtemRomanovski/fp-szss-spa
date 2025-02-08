import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicalEquipmentComponent } from './technical-equipment.component';

describe('TechnicalEquipmentComponent', () => {
	let component: TechnicalEquipmentComponent;
	let fixture: ComponentFixture<TechnicalEquipmentComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [TechnicalEquipmentComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(TechnicalEquipmentComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
