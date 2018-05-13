import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { NewServiceService } from '../new-service.service';//

@Component({
  selector: 'app-show-comments',
  templateUrl: './show-comments.component.html',
  styleUrls: ['./show-comments.component.css']
})
export class ShowCommentsComponent implements OnInit {
  @Input() showItem: any;
  @Output() aTaskEventEmitter = new EventEmitter();
  newComment: any;
  thisArt;

  constructor(private _httpService: NewServiceService) {
    console.log(this.showItem)
    this.newComment = {rating: "", comment: ""};
  }

  ngOnInit() {
    console.log(this.showItem)
  }

  onCommentSubmit(id: string){
    this.newComment = this._httpService.addNewComment(id, this.newComment).subscribe(data=>{
      console.log("got into comment Function" +data);
    })
    // this.getAllArts();
    this.newComment = {rating: "", comment: ""};
  }

  imageClicked(id: string){
    // var art = this._httpService.getLatte(id);
      this.aTaskEventEmitter.emit(id);
    // this.thisArt = null;
  }
}
