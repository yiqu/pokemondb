import { Component, OnInit, EventEmitter, Output, OnDestroy, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject, timer } from 'rxjs';
import { takeUntil, take } from 'rxjs/operators';
import { MenuItem } from '../shared/models/nav-item.model';
import { environment } from '../../environments/environment';
import { UntypedFormControl } from '@angular/forms';
import { createFormControl2 } from '../shared/general.utils';
import { IsMobileService } from '../shared/services/is-mobile.service';
import { trigger, transition, useAnimation } from '@angular/animations';

const defaultProfileImg: string = "assets/user/default-user5.png";

@Component({
  selector: 'app-top-nav',
  templateUrl: 'top-nav.component.html',
  styleUrls: ['./top-nav.component.scss'],
  animations: [
  ],
})
export class TopNavComponent implements OnInit, OnDestroy, AfterViewInit {

  headerTitle: string = "Pokemon DB";
  compDest$: Subject<any> = new Subject<any>();
  logoShakeState?: any = null;
  leftNavMenuState: boolean = false;
  swingState: boolean = false;
  userMenuItems: MenuItem[] = [];
  avartarImgSrc: string = defaultProfileImg;
  actionTrackerCtrl: UntypedFormControl;


  @Output()
  navToggle: EventEmitter<any> = new EventEmitter<any>();

  @Output()
  logoClick: EventEmitter<any> = new EventEmitter<any>();

  constructor(public router: Router, public route: ActivatedRoute,
    public ims: IsMobileService) {
    this.actionTrackerCtrl = createFormControl2(false, false);

    this.userMenuItems.push(
      new MenuItem("record_voice_over", "Sign in", "signin")
    )
  }

  ngOnInit() {

  }

  ngAfterViewInit() {
  }

  onLogoClick() {
    this.logoClick.emit();
    this.logoShakeState = !this.logoShakeState;
  }

  onMenuClick() {
    this.navToggle.emit(true);
  }


  onAuthClick() {
    this.router.navigate(['auth']);
  }

  onMenuItemClick(item: MenuItem) {
    if (item.id === "account") {
      this.router.navigate(['/', 'my-account']);
    } else if (item.id === "signout") {
      this.onSignoutClick();
    } else if (item.id === "signin") {
      this.onAuthClick();
    }
  }

  onSignoutClick() {
  }


  ngOnDestroy() {
    this.compDest$.next(null);
    this.compDest$.complete();
  }
}
