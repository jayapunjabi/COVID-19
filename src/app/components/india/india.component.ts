import { Component, OnInit } from '@angular/core';
import { DataServiceService} from 'src/app/services/data-service.service'

@Component({
  selector: 'app-india',
  templateUrl: './india.component.html',
  styleUrls: ['./india.component.css']
})
export class IndiaComponent implements OnInit {
  loading = true;
  indiaStat : any;

  constructor(private service : DataServiceService) { }

  ngOnInit(): void {
    this.service.getIndiaData().subscribe((res) => {
      this.indiaStat = res;
      console.log(res);
      this.loading = false;
    });
  }

}
