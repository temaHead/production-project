import { StateSchema } from '@/app/providers/StoreProvider';
import { getLoginPassword } from './getLoginPassword';

describe('getLoginPassword.test', () => {
    test('возвращаем пароль', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: { password: 'qwerty' },
        };
        expect(getLoginPassword(state as StateSchema)).toEqual('qwerty');
    });
    test('работа при пустом стейте', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginPassword(state as StateSchema)).toEqual('');
    });
});
