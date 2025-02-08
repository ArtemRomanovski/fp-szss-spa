import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstructionControlComponent } from './construction-control.component';

describe('ConstructionControlComponent', () => {
	let component: ConstructionControlComponent;
	let fixture: ComponentFixture<ConstructionControlComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [ConstructionControlComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(ConstructionControlComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
