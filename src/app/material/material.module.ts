import { NgModule, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatBadgeModule } from '@angular/material/badge';


const MaterialComponents = [
  MatButtonModule,
  MatButtonToggleModule,
  MatBadgeModule,
  Component
];

@Component({
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule {
  hidden = false;
  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }
 }
