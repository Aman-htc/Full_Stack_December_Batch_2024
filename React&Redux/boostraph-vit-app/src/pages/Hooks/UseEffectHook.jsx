import { useEffect, useState } from "react";
const UseEffectHook = () => {
              const [count, setCount] = useState(0);
              useEffect(() => {
                  // Set up a timer to increment the count after 1 second
                 const timerId = setTimeout(() => {
                           setCount((count) => count + 1);
                 }, 1000);
                 // Cleanup: clear the timer if the component unmounts or before running the effect again
                 return () => { clearTimeout(timerId); };
             },[]);  // No dependency array 
            return <div>Count: {count}</div>;
};
export default UseEffectHook;