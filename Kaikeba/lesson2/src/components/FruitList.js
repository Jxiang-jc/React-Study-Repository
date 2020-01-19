import React from "react";

// 显示水果列表
export default function fruitList({ fruits, setFruits }) {
    // 在数组中删除指定下标元素
    const delFruit = (idx) => {
        const tem = [...fruits];
        tem.splice(idx, 1)
        setFruits(tem)
    }
    console.log('jx777')
    return (
        <ul>
            {fruits.map((item, idx) => {
                return <li key={idx} onClick={() => {delFruit(idx)}}>{item}</li>;
            })}
        </ul>
    );
}
