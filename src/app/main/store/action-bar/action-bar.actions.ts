import { createAction, props } from "@ngrx/store";
import { MenuOption } from "src/app/shared/models/drop-menu.model";

const SET_ACTIONS: string = '[Pokemon All Actions/UI] Set action bar items';
const EDIT_ACTION: string = '[Pokemon All Actions/UI] Edit action property';


export const setActions = createAction(
  SET_ACTIONS,
  props<{actions: MenuOption[]}>()
)

export const editAction = createAction(
  EDIT_ACTION,
  props<{payload: any}>()
)
