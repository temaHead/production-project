import { StateSchema } from '@/app/providers/StoreProvider';
import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsIsLoading,
} from './articleDetails';

describe('articleDetails.test', () => {
    test('должен вернуть данные', () => {
        const data = {
            id: '1',
            title: 'subtitle',
        };
        const state: DeepPartial<StateSchema> = {
            articleDetails: {
                data,
            },
        };
        expect(getArticleDetailsData(state as StateSchema)).toEqual(data);
    });
    test('должен работать с пустыми данными состояния', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getArticleDetailsData(state as StateSchema)).toEqual(undefined);
    });
    test('должно вернуть ошибку', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetails: {
                error: 'error',
            },
        };
        expect(getArticleDetailsError(state as StateSchema)).toEqual('error');
    });
    test('должно работать с ошибкой пустого состояния', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getArticleDetailsError(state as StateSchema)).toEqual(undefined);
    });
    test('должен вернуть isLoading', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetails: {
                isLoading: true,
            },
        };
        expect(getArticleDetailsIsLoading(state as StateSchema)).toEqual(true);
    });
    test('должен работать с пустым состоянием isLoading', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getArticleDetailsIsLoading(state as StateSchema)).toEqual(false);
    });
});
