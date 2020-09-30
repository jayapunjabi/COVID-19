import { Component, OnInit } from '@angular/core';
import { DataServiceService} from 'src/app/services/data-service.service'

@Component({
  selector: 'app-india',
  templateUrl: './india.component.html',
  styleUrls: ['./india.component.css']
})
export class IndiaComponent implements OnInit {
  loading = true;
  indiaStateStat : any;
  isDistrictVisible = false;
  stateDistrictStat : any;
  districtStat: any;
  districtName: string[] = [];
  oneAtATime: boolean = true;
  state : string = '';
  total : any = {};


  constructor(private service : DataServiceService) { }

  ngOnInit(): void {
    this.oneAtATime = true;
    this.service.getIndiaData().subscribe((res) => {
      this.indiaStateStat = res;
      console.log(this.indiaStateStat.statewise);
      this.indiaStateStat = this.indiaStateStat.statewise;
      this.total = this.indiaStateStat.shift();
      this.indiaStateStat.push(this.total);
      this.loading = false;
    });
    this.service.getIndiaDistrictData().subscribe((res) => {
      this.stateDistrictStat = res;
    })

  }

}
