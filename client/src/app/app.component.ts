import { Component, OnInit } from '@angular/core';
import { NewServiceService } from './new-service.service';//

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Rate My Latte Art';
  lattes;
  newLatte: any;
  newComment: any;
  thisLatte;
  average;
  constructor(private _httpService: NewServiceService) {

  }
  ngOnInit() {
    this.newLatte = {imgUrl: "", creator: ""};
    this.newComment = {rating: "", comment: ""};
    this.getAllArts();
  }

  getAllArts(){
    let lattes = this._httpService.getAllArts();
    lattes.subscribe(data =>{
      console.log(data);
      this.lattes =data;
    })
  }

  onSubmit(){
    console.log("Form submitted")
    this.newLatte = this._httpService.addNewLatte(this.newLatte).subscribe(data=>{
      console.log("got into Function" +data);
    })
    this.getAllArts();
    this.newLatte = {imgUrl: "", creator: ""};
  }

  dataFromChild(eventData){
    let latte = this._httpService.getLatte(eventData).subscribe(data=>{
      this.thisLatte = data;
      // console.log(data);
      
      // console.log(this.thisLatte.ratings.rating);
    })
    
  }
  // getAverageRating(thisLatte){
  //   let ave = this._httpService.getAverage(thisLatte).subscribe(data=>{
  //     this.average = data;
  //   })
  }


  // getStuff() {
  //   console.log("get Stuff Service! -Component");
  //   this.service.getStuff().subscribe(data => {
  //     this.lattes = data;
  //   }
  //   )}
  
