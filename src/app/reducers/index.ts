import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import { ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store';

import { environment } from '../../environments/environment';
export interface AppState {
  router: RouterReducerState;
}

export const reducers: ActionReducerMap<AppState> = {
  router: routerReducer,
};

export function logger(
  reducer: ActionReducer<AppState>
): ActionReducer<AppState> {
  return (state, action) => {
    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<AppState>[] = !environment.production
  ? []
  : [];
