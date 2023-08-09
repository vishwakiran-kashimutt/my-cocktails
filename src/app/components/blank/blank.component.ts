import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blank',
  templateUrl: './blank.component.html',
  styleUrls: ['./blank.component.scss']
})
export class BlankComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToHome(){
    this.router.navigate(['/home'])
  }

}
