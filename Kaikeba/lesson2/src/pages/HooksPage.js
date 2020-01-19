import React, { useState, useEffect } from "react";
import FruitList from "../components/FruitList";
import FruitAdd from "../components/FruitAdd";

export default function HooksPage() {
    const [counter, setCounter] = useState(0);
    const [fruits, setFruits] = useState(["apple", "banana"]);

    return (
        <div>
            <h1>HooksPage</h1>
            <p>{useClock().toLocaleTimeString()}</p>
            <div onClick={() => setCounter(counter + 1)}>{counter}</div>
            <FruitAdd addFruit={name => setFruits([...fruits, name])} />
            <FruitList fruits={fruits} setFruits={setFruits} />
        </div>
    );
}

// 自定义Hook 必须use 开头。 auseaa、useaaa都是错的。useAaa才是正确的写法
function useClock() {
    const [date, setDate] = useState(new Date());
    // 副作用。 return相当于组件unmount的时候执行。第二个参数是一个数组。关联了哪个参数，哪个参数改变就会触发一次useEffect
    useEffect(() => {
        console.log("useEffect");
        const timer = setInterval(() => {
            setDate(new Date());
        }, 1000);
        return () => {
            clearInterval(timer);
        };
    }, []);
    return date;
}
