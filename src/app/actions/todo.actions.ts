import { Action } from '@ngrx/store'; // Action Interface
import { TodoActionTypes } from '../shared/enum/todo-action-types.enum';

export class ActionParent implements Action {
    type : any;
    payload: any;
}

export class TodoAdd implements ActionParent {
    public type = TodoActionTypes.Add;
    constructor(public payload: any) {
    }
}

export class TodoRemove implements ActionParent {
    public type = TodoActionTypes.Remove;
    constructor(public payload: any) {
    }
}