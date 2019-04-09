import { NgModule } from '@angular/core';
import { CobenLibCommonComponent } from './coben-lib-common.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [CobenLibCommonComponent, HeaderComponent],
  imports: [RouterModule],
  exports: [CobenLibCommonComponent, HeaderComponent]
})
export class CobenLibCommonModule {}
