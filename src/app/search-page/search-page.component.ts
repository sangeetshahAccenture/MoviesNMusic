import {Component, AfterViewInit} from '@angular/core';

@Component({
    selector: 'app-search-page',
    templateUrl: './search-page.component.html',
    styleUrls: ['./search-page.component.css']
})

export class SearchPageComponent implements AfterViewInit {
    
    ngAfterViewInit() {
        document.getElementById('moviesBtn').focus();
    }
    
    isMoviesSearch: boolean = true;
        
    moviesBtnClicked(){
        this.isMoviesSearch = true;
    }
    
    musicBtnClicked() {
        this.isMoviesSearch = false;
    }
    
    
}