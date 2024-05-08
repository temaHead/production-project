import { StateSchema } from 'app/providers/StoreProvider';
import { AsyncThunkAction } from '@reduxjs/toolkit';

type ActionCreatorType<Return, Arg, RejectedVAlue> = (
    arg: Arg
) => AsyncThunkAction<Return, Arg, { rejectValue: RejectedVAlue }>;

export class TestAsyncThunk<Return, Arg, RejectedVAlue> {
    dispatch: jest.MockedFn<any>;

    getState: () => StateSchema;

    actionCreator: ActionCreatorType<Return, Arg, RejectedVAlue>;

    constructor(actionCreator: ActionCreatorType<Return, Arg, RejectedVAlue>) {
        this.actionCreator = actionCreator;
        this.dispatch = jest.fn();
        this.getState = jest.fn();
    }

    async callThunk(arg: Arg) {
        const action = this.actionCreator(arg);
        const result = await action(this.dispatch, this.getState, undefined);
        return result;
    }
}
