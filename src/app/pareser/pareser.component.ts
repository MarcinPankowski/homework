import { Page } from './../interfaces/page';
import { Menu } from './../interfaces/menu';
import { ParserService } from './../services/parser.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pareser',
  templateUrl: './pareser.component.html',
  styleUrls: ['./pareser.component.css']
})
export class PareserComponent implements OnInit {

  private menu: Menu;
  private scoreMenu: [Page];

  constructor(
    private parserService: ParserService
  ) { }

  ngOnInit() {
    console.log( this.parserService.testService() );

    this.parserService.getMenu().subscribe(
      (data: Menu) => {
        this.menu = data;
        this.scoreMenu = this.rebuildMenu(this.menu);
      }
    );



  }

  rebuildMenu(menu: Menu): any {
    let roles = [];
    let pages: [Page];
    let test = [];

    console.log(menu.menu);

    Object.entries(menu.menu).forEach(([key, value]) => {
     // console.log(key);
     // console.log(value);

      value.forEach(element => {
       // console.log(element);

        if(!test.find(x => x.id === element.id)) {
          if(!element.roles) {
            console.log('in if');
            //x.roles = [];
            element.roles.push(key);
          }




          test.push(element);
        }


        // test.push(element);
        // console.log(test.indexOf(element));
        // if( test.indexOf(element) !== -1) {
        //   test.push(element);
        // }

      });

    })


    // for(let roleId in menu.menu) {
    //   console.log(roleId);
    //   console.log(menu.menu[roleId])
    //   // pages.push( menu.menu[roleId] );
    // }

    console.log(test);
    // Object.keys(menu.menu).forEach(function(key,index) {
    //   console.log(key);
    //   console.log(index);
    //   // key: the name of the object key
    //   // index: the ordinal position of the key within the object
    // });




  }

}
