import { DestroyService } from './../../../../../../common/service/destroy.service';
import { ResponseAPIContent } from './../../../../../../common/types/response-api';
import { CardItem } from './../types/card-item';
import { NewFunitureService } from './../services/new-funiture-service.service';
import { Component, OnInit } from '@angular/core';
import { GridFunitureModule } from '../modules/grid-funiture-module';
import { DataSorting } from '../data/sorting';
import { SUCCESS } from 'src/app/common/constant/http-status';
import { PayloadProduct } from '../types/payload-product';
import { Pageable } from 'src/app/common/types/pageable';
import { delay, finalize, takeUntil, BehaviorSubject, Observable, combineLatest, switchMap } from 'rxjs';
import { NzTableSortOrder } from 'ng-zorro-antd/table';

@Component({
  selector: 'app-grid-new-funiture',
  templateUrl: './grid-new-funiture.component.html',
  styleUrls: ['./grid-new-funiture.component.scss'],
  standalone: true,
  imports: [GridFunitureModule],
  providers: [DestroyService]
})
export class GridNewFunitureComponent implements OnInit {
  listSorting = DataSorting;
  listDataCard: CardItem[] = [];
  sort$ = new BehaviorSubject<{ key: string; order: NzTableSortOrder }>({
    key: 'updated_date',
    order: 'desc',
  });
  totalPage = 0;
  showDropDown = false;
  vm$!: Observable<ResponseAPIContent<CardItem[]>>;
  constructor(public service: NewFunitureService,
    private destroy$: DestroyService) { }
  ngOnInit() {
    this.vm$ = this.service.search().pipe(
      takeUntil(this.destroy$),
    )
  }
  onSort(value: { key: string, label: string }) {
    switch (value.key) {
      case "lowToHight": {
        this.service.sort$.next({ key: 'price', order: 'asc' });
        break;
      }
      case "hightToLow": {
        this.service.sort$.next({ key: 'price', order: 'desc' });
        break;
      }
      case "asc": {
        this.service.sort$.next({ key: 'name', order: 'asc' });
        break;
      }
      case "desc": {
        this.service.sort$.next({ key: 'name', order: 'desc' });
        break;
      }
      default:
        break;
    }
  }
}
