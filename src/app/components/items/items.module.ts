import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ItemComponent} from "./item/item.component";
import {ItemsContainerComponent} from "./component/items-container.component";
import {ItemsHeaderComponent} from "./items-header/items-header.component";
import {FilterModule} from "../filter/filter.module";
import {FormsModule} from "@angular/forms";
import {CheckboxComponent} from './item/checkbox/checkbox.component';
import {NgxIndexedDBModule} from "ngx-indexed-db";
import {ScrollingModule} from "@angular/cdk/scrolling";
import {FaIconLibrary, FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {faSliders} from "@fortawesome/free-solid-svg-icons";
import {ItemsService} from "./services/items.service";
import {SearchInputComponent} from "../global/search-input/search-input.component";
import {SearchPipe} from "../../pipes/search.pipe";

@NgModule({
  declarations: [
    ItemComponent,
    ItemsContainerComponent,
    ItemsHeaderComponent,
    CheckboxComponent,
  ],
  imports: [
    CommonModule,
    FilterModule,
    FormsModule,
    ScrollingModule,
    FontAwesomeModule,
    NgxIndexedDBModule,
    SearchInputComponent,
    SearchPipe,
  ],
  exports: [
    ItemComponent,
    ItemsContainerComponent,
    ItemsHeaderComponent
  ],
  providers: [
    ItemsService,
  ]
})
export class ItemsModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(faSliders);
  }
}
