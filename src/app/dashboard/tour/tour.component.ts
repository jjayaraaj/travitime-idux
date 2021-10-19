import { CommonService } from './../../service/common/common.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tour',
  templateUrl: './tour.component.html',
  styleUrls: ['./tour.component.css'],
})
export class TourComponent implements OnInit {
  constructor(private commonService: CommonService) {}

  ngOnInit(): void {
    this.commonService.loadPage('/tour');
  }
}
