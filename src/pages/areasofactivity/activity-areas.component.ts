import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
	trigger,
	state,
	style,
	animate,
	transition,
} from '@angular/animations';
import { activityAreaItem, activityAreasList } from './constants';

@Component({
	selector: 'fp-szss-activity-areas',
	standalone: true,
	imports: [],
	templateUrl: './activity-areas.component.html',
	styleUrl: './activity-areas.component.scss',
	animations: [
		trigger('expandCollapse', [
			state('expanded', style({
				height: '*',
				opacity: 1,
				overflow: 'hidden',
				paddingTop: '20px',
			})),
			state('collapsed', style({
				height: '0px',
				opacity: 0,
				overflow: 'hidden',
			})),
			transition('collapsed <=> expanded', [
				animate('300ms ease-in-out')
			])
		])
	],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AreasOfActivityComponent {
	protected activities: activityAreaItem[] = activityAreasList;

	private lastOpenItemIndex: number | null = null;

	public seeAll(index: number): void {
		this.lastOpenItemIndex = (this.lastOpenItemIndex === index) ? null : index;
	}

	public isShow(index: number): boolean {
		return this.lastOpenItemIndex === index;
	}
}
