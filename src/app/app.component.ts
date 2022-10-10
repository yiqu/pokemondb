import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
// import 'firebase/analytics';
// import 'firebase/auth';
// import 'firebase/database';
import { environment } from 'src/environments/environment';
import { AppMetaService } from './shared/services/app-meta.service';
import { IsMobileService } from './shared/services/is-mobile.service';
import { AppState } from './store/global/app.reducer';
import { DeviceDetectorService } from 'ngx-device-detector';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  footerTitle: string = "@KQ 2022";
  myUrl: string = "https://yiqu.github.io/";
  compDest$: Subject<any> = new Subject<any>();
  isMobile: boolean = false;

  @ViewChild("snav")
  sideNav!: MatSidenav;


  constructor(public changeDetectorRef: ChangeDetectorRef,
    private store: Store<AppState>, public ms: AppMetaService,
    public ds: DeviceDetectorService) {
      this.isMobile = this.ds.isMobile();
  }

  ngOnInit() {
  }


  /**
   * Initialize Firebase.
   * NOTE: Injecting AngularFire will auto initializeApp
   */
  initFirebase() {
  }

  onTopNavMenuClick() {
    if (this.sideNav) {
      this.sideNav.toggle();
    }
  }

  onNavClose() {
    if (this.sideNav) {
      this.sideNav.close();
    }
  }

  onTopNavLogoClick() {
  }

}
