import React, { useState } from "react";
// Child component wrapped with React.memo
const Child = React.memo(({ value }) => {
          console.log("Child rendered!");
          return <h2>Value: {value}</h2>;
});
const UseMemoHook = () => {
         const [count, setCount] = useState(0);
         const [other, setOther] = useState(0);
         return (
              <div>
                    <h1>Count: {count}</h1>
                   <button onClick={() => setCount(count + 1)}>Increase Count</button>
                  <h1>Other: {other}</h1>
                  <button onClick={() => setOther(other + 1)}>Increase Other</button>
                  {/* Child only depends on count */}
                  <Child value={count} />
            </div>
        );
};
export default UseMemoHook