import './vendor.ts';

import { NgModule, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Ng2Webstorage } from 'ngx-webstorage';
import { JhiEventManager } from 'ng-jhipster';

import { AuthExpiredInterceptor } from './blocks/interceptor/auth-expired.interceptor';
import { ErrorHandlerInterceptor } from './blocks/interceptor/errorhandler.interceptor';
import { NotificationInterceptor } from './blocks/interceptor/notification.interceptor';
import { Java10SharedModule } from 'app/shared';
import { Java10CoreModule } from 'app/core';
import { Java10AppRoutingModule } from './app-routing.module';
import { Java10HomeModule } from './home/home.module';
import { Java10EntityModule } from './entities/entity.module';
import { PaginationConfig } from './blocks/config/uib-pagination.config';
import { StateStorageService } from 'app/core/auth/state-storage.service';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import {
  JhiMainComponent,
  NavbarComponent,
  FooterComponent,
  ProfileService,
  PageRibbonComponent,
  ActiveMenuDirective,
  ErrorComponent
} from './layouts';

@NgModule({
  imports: [
    BrowserModule,
    Java10AppRoutingModule,
    Ng2Webstorage.forRoot({ prefix: 'jhi', separator: '-' }),
    Java10SharedModule,
    Java10CoreModule,
    Java10HomeModule,
    Java10EntityModule
    // jhipster-needle-angular-add-module JHipster will add new module here
  ],
  declarations: [JhiMainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, ActiveMenuDirective, FooterComponent],
  providers: [
    ProfileService,
    PaginationConfig,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthExpiredInterceptor,
      multi: true,
      deps: [StateStorageService, Injector]
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorHandlerInterceptor,
      multi: true,
      deps: [JhiEventManager]
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: NotificationInterceptor,
      multi: true,
      deps: [Injector]
    }
  ],
  bootstrap: [JhiMainComponent]
})
export class Java10AppModule {}
