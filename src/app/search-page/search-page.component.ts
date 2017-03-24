import {Component, AfterViewInit} from '@angular/core';
import {AuthService} from "app/shared/auth.service";
import {Visitor} from "app/shared/analytics.service";

@Component({
    selector: 'app-search-page',
    templateUrl: './search-page.component.html',
    styleUrls: ['./search-page.component.css']
})

export class SearchPageComponent implements AfterViewInit {
    
    ngAfterViewInit() {
        Visitor.pageview("SearchPageComponent").send();
        document.getElementById('moviesBtn').focus();
    }
    
    isMoviesSearch: boolean = true;
        
    moviesBtnClicked(){
        Visitor.event("Button Press", "Movies Search Button Press" ).send();
        this.isMoviesSearch = true;
    }
    
    musicBtnClicked() {
        Visitor.event("Button Press", "Movies Search Button Press" ).send();
        this.isMoviesSearch = false;
    }
    
    
}