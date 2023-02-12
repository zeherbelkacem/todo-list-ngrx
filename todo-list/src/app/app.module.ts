import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { CoreModule } from './core/core.module';
import { Effects } from './store/task.effects';
import { reducers } from './store/app.state';
import { AccordionModule } from 'primeng/accordion';
import { ProtectedModule } from "./protected/protected.module";


@NgModule({
    declarations: [AppComponent],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        CoreModule,
        ProtectedModule,
        AccordionModule,
        StoreModule.forRoot(reducers, {
            // metaReducers,
            runtimeChecks: {
                strictStateImmutability: true,
                strictActionImmutability: true,
                strictStateSerializability: true,
                strictActionSerializability: true,
                strictActionWithinNgZone: true,
                strictActionTypeUniqueness: true,
            },
        }),
        EffectsModule.forRoot([Effects]),
        StoreRouterConnectingModule.forRoot(),
        StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
        ProtectedModule
    ]
})
export class AppModule {}
