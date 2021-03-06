import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { YoutubedlSharedModule } from '../../shared';
import {
    VideoService,
    VideoPopupService,
    VideoComponent,
    VideoDetailComponent,
    VideoDialogComponent,
    VideoPopupComponent,
    VideoDeletePopupComponent,
    VideoDeleteDialogComponent,
    videoRoute,
    videoPopupRoute,
    VideoResolvePagingParams,
    VideoPlayComponent,
    VideoPlayPopupComponent
} from './';

const ENTITY_STATES = [
    ...videoRoute,
    ...videoPopupRoute,
];

@NgModule({
    imports: [
        YoutubedlSharedModule,
        RouterModule.forRoot(ENTITY_STATES, { useHash: true })
    ],
    declarations: [
        VideoComponent,
        VideoDetailComponent,
        VideoDialogComponent,
        VideoDeleteDialogComponent,
        VideoPopupComponent,
        VideoDeletePopupComponent,
        VideoPlayComponent,
        VideoPlayPopupComponent
    ],
    entryComponents: [
        VideoComponent,
        VideoDialogComponent,
        VideoPopupComponent,
        VideoDeleteDialogComponent,
        VideoDeletePopupComponent,
        VideoPlayComponent,
        VideoPlayPopupComponent
    ],
    providers: [
        VideoService,
        VideoPopupService,
        VideoResolvePagingParams,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class YoutubedlVideoModule {}
