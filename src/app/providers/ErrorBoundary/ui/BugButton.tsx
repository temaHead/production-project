import { Button } from 'widgets/Button';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

function BugButton() {
    const [error, setError] = useState(false);
    const { t } = useTranslation();

    const onThrow = () => setError(true);
    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]);
    return (
        <Button onClick={onThrow}>
            {t('throw Error')}
        </Button>
    );
}

export default BugButton;
