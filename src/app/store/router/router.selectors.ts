import * as fromRouter from '@ngrx/router-store';
import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AppState } from '../global/app.reducer';
import { Params } from '@angular/router';
import { RouterReducerState } from '@ngrx/router-store';
import { ROUTER_STATE } from './router.state';

export const selectRouter = createFeatureSelector<RouterReducerState>(ROUTER_STATE);


export const {
  selectCurrentRoute,   // select the current route
  selectFragment,       // select the current route fragment
  selectQueryParams,    // select the current route query params
  selectQueryParam,     // factory function to select a query param
  selectRouteParams,    // select the current route params
  selectRouteParam,     // factory function to select a route param
  selectRouteData,      // select the current route data
  selectUrl,            // select the current url,
  selectTitle
} = fromRouter.getSelectors(selectRouter);


export const selectRouteNestedParams = createSelector(selectRouter, (router) => {
  let currentRoute = router?.state?.root;
  let params: Params = {};
  while (currentRoute?.firstChild) {
    currentRoute = currentRoute.firstChild;
    params = {
      ...params,
      ...currentRoute.params,
    };
  }
  return params;
});

export const selectRouteNestedParam = (param: string) =>
  createSelector(selectRouteNestedParams, (params) => params && params[param]);
