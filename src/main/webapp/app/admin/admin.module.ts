import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Java10SharedModule } from 'app/shared';
/* jhipster-needle-add-admin-module-import - JHipster will add admin modules imports here */

import {
  adminState,
  AuditResolvePagingParams,
  AuditsComponent,
  LogsComponent,
  JhiMetricsMonitoringModalComponent,
  JhiMetricsMonitoringComponent,
  JhiHealthModalComponent,
  JhiHealthCheckComponent,
  JhiConfigurationComponent,
  JhiDocsComponent,
  AuditsService,
  JhiConfigurationService,
  JhiHealthService,
  JhiMetricsService,
  LogsService
} from './';

@NgModule({
  imports: [
    Java10SharedModule,
    RouterModule.forChild(adminState)
    /* jhipster-needle-add-admin-module - JHipster will add admin modules here */
  ],
  declarations: [
    AuditsComponent,
    LogsComponent,
    JhiConfigurationComponent,
    JhiHealthCheckComponent,
    JhiHealthModalComponent,
    JhiDocsComponent,
    JhiMetricsMonitoringComponent,
    JhiMetricsMonitoringModalComponent
  ],
  entryComponents: [JhiHealthModalComponent, JhiMetricsMonitoringModalComponent],
  providers: [AuditResolvePagingParams, AuditsService, JhiConfigurationService, JhiHealthService, JhiMetricsService, LogsService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Java10AdminModule {}
