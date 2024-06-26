import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@/shared/ui/Button';
import { counterActions } from '../model/slice/counterSlice';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';

function Counter() {
    const dispatch = useDispatch();
    const counterValue = useSelector(getCounterValue);

    const increment = () => {
        dispatch(counterActions.increment());
    };
    const decrement = () => {
        dispatch(counterActions.decrement());
    };
    return (
        <div>
            <h1 data-testid="value-title">{counterValue}</h1>
            <Button onClick={increment} data-testid="increment-btn">
                {' '}
                inc
            </Button>
            <Button onClick={decrement} data-testid="decrement-btn">
                {' '}
                dec
            </Button>
        </div>
    );
}

export default Counter;
