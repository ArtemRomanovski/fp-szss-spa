import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreasofactivityComponent } from './areasofactivity.component';

describe('AreasofactivityComponent', () => {
	let component: AreasofactivityComponent;
	let fixture: ComponentFixture<AreasofactivityComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [AreasofactivityComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(AreasofactivityComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
