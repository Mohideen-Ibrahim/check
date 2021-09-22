import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/Post';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: Post[];
  currentPost: Post = {
    id: 0,
    title: '',
    body: ''
  };
  isEdit: boolean = false;
  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postService.getPosts().subscribe(posts => {
        console.log(posts,"Posts");
        this.posts = posts;
    });
  }

  onNewPost(post: Post){
    this.posts.unshift(post);
  }
  onUpdatedPost(post: Post){
    this.posts.forEach((cur,idx) => {
      if(post.id === cur.id){
        this.posts.splice(idx,1);
        this.posts.unshift(post);
        this.isEdit = false;
        this.currentPost = {
          id: 0,
          title: '',
          body: ''
        }
      }
    });    
  }

  onEditPost(post: Post){
    this.currentPost = post;
    this.isEdit = true;
  }
  onDeletePost(post: Post){
    if(confirm("Are you sure ?")){
      console.log(post,"Post");
      
      this.postService.removePost(post.id).subscribe(posts => {
        console.log(posts,"deletedPosts");
        this.posts.forEach((cur,idx) => {
          if(post.id === cur.id){
            this.posts.splice(idx,1);
          }
        });
      });
    }    
  }
}
