import { Component } from '@angular/core';
import { newsDataItem, newsDataList } from './constants';

@Component({
	selector: 'fp-szss-news',
	standalone: true,
	imports: [],
	templateUrl: './news.component.html',
	styleUrl: './news.component.scss',
})
export class NewsComponent {
	protected readonly dataList = newsDataList;

	public getImagePath(newsItem: newsDataItem): string {
		return newsItem.imagePath || '';
	}
}
