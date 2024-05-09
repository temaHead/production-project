import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { profileReducer } from 'entites/Profile';

const reducers:ReducersList = {
    profile: profileReducer,
};

interface ProfilePageProps {
}

function ProfilePage() {
    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div>
                ProfilePage
            </div>
        </DynamicModuleLoader>

    );
}
export default ProfilePage;
