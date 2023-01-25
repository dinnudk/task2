import { Component } from '@angular/core';
import jsonData from "../assets/json.json";
import { PostService } from './post.service';

interface jData{
  firstName:string;
  lastName:string;
  role:string;
  fb:string;
  twitter:string;
  linkedIn:string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'task2';
  data: jData[] = jsonData;
  httpdata: any;
  value!: any;
  constructor(private appServices:PostService){}
  getVal(val: any){
    this.value = val;
    if(this.value != '')
      this.appServices.fetchDataSer(Number(this.value)).subscribe((data: object)=>{
        this.httpdata = data;})
    else
      this.appServices.fetchDataSer().subscribe((data: object)=>{
        this.httpdata = data;})
  }
  // ngOnInit(){
  //   this.poostData.getPosts().subscribe((result)=>{
  //     console.warn("result",result)
  //     this.data1 = result
  //   })
  // }
}
