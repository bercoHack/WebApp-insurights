import { Component, OnInit, Optional } from '@angular/core';
import { MovielistService } from './movielist.service';
import { Observable } from 'rxjs';
import {movie} from './movie'
import {map, filter} from 'rxjs/operators'
import { Router,NavigationEnd  } from '@angular/router';
import {ActivatedRoute} from '@angular/router'
import { LoggedInServiceService } from '../login/logged-in-service.service';

@Component({
  selector: 'app-movielist',
  templateUrl: './movielist.component.html',
  styleUrls: ['./movielist.component.css']
})
export class MovielistComponent implements OnInit {
    moviesVar: Observable<movie[]>; 
    name: String;
    data: String;
    constructor(private movieListService: MovielistService, private router: Router) {
      if(router.url.split('/')[2] != null){
        this.data = router.url.split('/')[2];
      }
      else{
        this.data = '0';
      }
      this.moviesVar = this.movieListService.getMovies();
    }

  ngOnInit(): void {
    this.movieListService.getMovies();
  }



}

