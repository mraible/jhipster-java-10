import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgbDateAdapter } from '@ng-bootstrap/ng-bootstrap';

import { NgbDateMomentAdapter } from './util/datepicker-adapter';
import { Java10SharedLibsModule, Java10SharedCommonModule, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [Java10SharedLibsModule, Java10SharedCommonModule],
  declarations: [HasAnyAuthorityDirective],
  providers: [{ provide: NgbDateAdapter, useClass: NgbDateMomentAdapter }],
  exports: [Java10SharedCommonModule, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Java10SharedModule {}
