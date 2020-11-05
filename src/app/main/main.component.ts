import { CommonService } from './../common.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  dataFromApi: any;
  constructor(private cs: CommonService) {}

  ngOnInit(): void {
    this.cs.getData().subscribe((res) => {
      console.log(res);
      this.dataFromApi = res['pugs'];
      this.cs.setData(res);
    });
  }
}
