import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedBudleModule } from './shared/shared.module';
import { SideNavModule } from './side-nav/side-nav.module';
import { TopNavModule } from './top-nav/top-nav.module';
import { FooterModule } from './footer/footer.module';
import { NotFoundComponentModule } from './404/404.module';
import { AccountBookFill, AlertFill, AppstoreOutline ,
  ProjectFill, ContainerFill, ProjectOutline, ContainerOutline} from '@ant-design/icons-angular/icons';
import { IconDefinition } from '@ant-design/icons-angular';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { EffectsModule } from '@ngrx/effects';
import { RouterState, StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { appReducers } from './store/global/app.reducer';
import { metaReducers } from './store/global/meta-reducer';
import { appEffects } from './store/global/app.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { ROUTER_STATE } from './store/router/router.state';


const icons: IconDefinition[] = [ AppstoreOutline, ProjectFill, ContainerFill,
  ProjectOutline, ContainerOutline ];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SharedBudleModule,
    SideNavModule,
    TopNavModule,
    FooterModule,
    NotFoundComponentModule,
    NzIconModule.forRoot(icons),
    StoreModule.forRoot(appReducers, {
      metaReducers: metaReducers,
      runtimeChecks: {
        strictActionImmutability: true,
        strictStateImmutability: true,
        strictActionTypeUniqueness: true
      }
    }),
    EffectsModule.forRoot(appEffects),
    StoreDevtoolsModule.instrument({
      maxAge: 45,
      logOnly: environment.production
    }),
    StoreRouterConnectingModule.forRoot({
      stateKey: ROUTER_STATE,
      routerState: RouterState.Minimal
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
