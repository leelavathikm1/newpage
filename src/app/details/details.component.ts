import { CommonService } from './../common.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  constructor(private router: ActivatedRoute, private cs: CommonService) {}
  imageName;
  allImages;
  imageNumber: number = 0;
  ngOnInit(): void {
    this.allImages = this.cs.getAllData();
    this.router.params.subscribe((res) => {
      console.log(res.imgname);
      this.imageNumber = Number(res.imgname);
      this.imageName = this.allImages[this.imageNumber];
    });
  }

  showImage(val) {
    if (val == 'prev') {
      if (this.imageNumber > -1) {
        this.imageNumber--;
        this.imageName = this.allImages[this.imageNumber];
      } else {
        alert('You are Watching First Image . No Previous Image available');
      }
    } else {
      if (this.imageNumber < this.allImages.length) {
        this.imageNumber++;
        this.imageName = this.allImages[this.imageNumber];
      } else {
        alert('You are Watching Last Image . No Image available');
      }
    }
  }
}
