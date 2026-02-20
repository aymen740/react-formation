import React, { useState } from "react";

export function dashboard() {




const [n, setN] = useState(0);

const increment = () => setN((n) => n + 1);

return (

<div>
    <h1>Je suis le dashboard</h1>
    <p>Compteur : {n}</p>
    <p>
        <button onClick={increment}>Incrémenter</button>
    </p>
</div>

);
}
