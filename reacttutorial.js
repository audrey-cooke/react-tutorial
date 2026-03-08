import { useState } from 'react';

export default function MyApp() {

    return(
        <div>
            <h1>
           Countrs that update seperately
            </h1>
            <MyButton count={count} onClick={handleClick} />
            <MyButton count={count} onClick={handleClick} />
        </div>
    );
}
function MyButton() {
          const [count, setCount] = useState(0);
}

function handleClick() {
    setCount(count + 1);

}return (
    <button onClick={handleClick}>
        Clicked {count} times
    </button>
);

const listItems = products.map(product =>
    <li key={product.id}>
        {product.title}
    </li>
);

return (
    <ul>{listItems}</ul>
);


function MyButton() {
    const [count, setCount] = useState(0);
}

function handleClick() {
    setCount(count + 1);
}