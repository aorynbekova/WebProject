import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  componentNews: any = [];

  constructor(public articleService: ArticleService) { }

  ngOnInit(): void {
    this.getComponentNews();
  }

  getComponentNews() {
    const articleObservable = this.articleService.getFashionNewsList();
    articleObservable.subscribe(news => this.componentNews = news);
  }


}
