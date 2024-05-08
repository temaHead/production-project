import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginUsername } from './getLoginUsername';

describe('getLoginUsername.test', () => {
    test('возвращаем username', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: { username: 'name' },
        };
        expect(getLoginUsername(state as StateSchema)).toEqual('name');
    });
    test('работа при пустом стейте', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginUsername(state as StateSchema)).toEqual('');
    });
});
