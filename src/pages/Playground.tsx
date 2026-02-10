import { useCallback, useMemo, useState } from 'react';
import Title from '../components/Title';
import ShowCount from '../components/ShowCount';
import Button from '../components/Button';


function Playground() {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);

    const incrementByOne = useCallback(() => {
        setCount1((prevCount) => prevCount + 1);
    }, [])

    const incrementByFive = useCallback(() => {
        setCount2((prevCount) => prevCount + 5);
    }, [])

    const isEvenOrOdd = useMemo(() => {
        let i = 1;
        while (i < 100000) {
            i++;
        }
        return count1 % 2 === 0;
    }, [])

    
    return (
        <div className="app">
            <Title />
            <ShowCount count={count1} title="Counter 1" />
            <span>{isEvenOrOdd ? 'Even' : 'Odd'}</span>
            <Button handleClick={incrementByOne}>Increment by one</Button>
            <hr />
            <hr />
            <ShowCount count={count2} title="Counter 2" />
            <Button handleClick={incrementByFive}>Increment by five</Button>
        </div>
    );
}

export default Playground;