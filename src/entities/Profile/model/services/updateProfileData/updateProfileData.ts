import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Profile, ValidateProfileError } from '../../types/profile';
import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm';
import { validateProfileData } from '../validateProfileData/validateProfileData';

export const updateProfileData = createAsyncThunk<Profile, void, ThunkConfig<ValidateProfileError[]>>(
    'profile/updateProfileData',
    async (_, { extra, rejectWithValue, getState }) => {
        // в компоненте для получения стейта используем хук юсСелектор а в асинкСанк используем гетстейт
        const formData = getProfileForm(getState());

        const errors = validateProfileData(formData);

        if (errors.length) {
            return rejectWithValue(errors);
        }

        try {
            const response = await extra.api.put<Profile>('/profile', formData);
            if (!response.data) {
                throw new Error();
            }
            return response.data;
        } catch (err) {
            console.log(err);
            return rejectWithValue([ValidateProfileError.SERVER_ERROR]);
        }
    }
);
