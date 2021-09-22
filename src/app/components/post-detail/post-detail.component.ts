import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { PostService } from '../../services/post.service';
import { Post } from '../../models/Post';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  post: Post;

  constructor(private route: ActivatedRoute,
    private postService: PostService, 
    private location: Location) { }

  ngOnInit() {
    const id=+ this.route.snapshot.paramMap.get('id') ;
    console.log(id);
    this.postService.getPostsById(id).subscribe( post => {
      this.post = post;
    });
    
  }

}
