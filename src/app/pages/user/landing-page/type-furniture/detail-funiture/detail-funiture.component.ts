import { Component, OnInit } from '@angular/core';
import { DetailFunitureModule } from './detail-module';

@Component({
  selector: 'app-detail-funiture',
  templateUrl: './detail-funiture.component.html',
  styleUrls: ['./detail-funiture.component.scss'],
  standalone:true,
  imports:[DetailFunitureModule]
})
export class DetailFunitureComponent implements OnInit {
  listProductSimilar = [
    {key:'1',name:'New Decor'},
    {key:'2',name:'Rectangular Rugs'},
    {key:'3',name:'Rugs'},
    {key:'4',name:'What\'s New At 2Modern'},
    {key:'5',name:'Women Designers'},
  ]
  constructor() { }

  ngOnInit() {
  }

}
