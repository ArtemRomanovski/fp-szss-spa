import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreasOfActivityComponent } from './activity-areas.component';

describe('AreasOfActivityComponent', () => {
	let component: AreasOfActivityComponent;
	let fixture: ComponentFixture<AreasOfActivityComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [AreasOfActivityComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(AreasOfActivityComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
