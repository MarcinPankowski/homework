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
    // let roles = [];
    // let pages: [Page];
    let tmpMenu = [];
    Object.entries(menu.menu).forEach(([roleId, value]) => {
    // console.log(key);
    // console.log(value);
      // value.forEach(element => {
      //   let item = tmpMenu.find(x => x.id === element.id);
      //   if(!item) {
      //     element.roles = [];
      //     element.roles.push(roleId);
      //     tmpMenu.push(element);
      //   } else {
      //     item.roles.push(roleId);
      //   }
      // })
      tmpMenu = this.walkSubmenuesRecursive(value, roleId, tmpMenu);
     });

     console.log(tmpMenu);
  }

  walkSubmenuesRecursive(menu, roleId, tmpMenu) {
    //let tmpMenu = [];
    menu.forEach(element => {
      let item = tmpMenu.find(x => x.id === element.id);
      if(!item) {
        element.roles = [];
        element.roles.push(roleId);
        tmpMenu.push(element);
      } else {
        item.roles.push(roleId);
      }

      let lastElement = tmpMenu[tmpMenu.length-1];
//       if(lastElement.menu) {
//         console.log('jadymy');
//        // console.log(lastElement.menu);
//         let _tmpMenu = [];
//         _tmpMenu = this.walkSubmenuesRecursive(lastElement.menu, roleId, _tmpMenu);
// // console.log(_tmpMenu);
//         // let _tmpMenu = [];
//         // Object.entries(lastElement.menu).forEach(([_roleId, value]) => {
//         //   _tmpMenu = this.walkSubmenuesRecursive(value, _roleId, _tmpMenu);
//         //  });
//         lastElement.menu = _tmpMenu;

//       }

      // if(element.menu) {
      //   console.log('jest submenu');
      //   tmpMenu = this.walkSubmenuesRecursive(element.menu, roleId, tmpMenu);
      // }

      // if(element.menu) {
      //   console.log('jest submenu');
      //   tmpMenu = this.walkSubmenuesRecursive(menu, roleId, tmpMenu);
      // }
    })

    return tmpMenu;

  }

}
