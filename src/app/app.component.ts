import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { Item } from './item';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  datalist: any;
  body: Item = { title: '', body: '' };

  constructor(private appService: AppService) { }


  ngOnInit(): void {
    this.datalist = this.appService.fetchItems();
  }

  addItem(): void {
    this.appService.addItems(this.body).subscribe((e) => { console.log(e); });
    this.datalist = this.appService.fetchItems();
  }

  removeItem(id): void {
    this.appService.removeItems(id).subscribe(() => { console.log('item deleted'); });
    this.datalist = this.appService.fetchItems();
  }

  clear(): void {
    const x: any = document.getElementById('body');
    x.value = '';
    this.body.body = '';
  }
}
