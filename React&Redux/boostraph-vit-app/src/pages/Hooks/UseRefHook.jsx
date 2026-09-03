// import React, { forwardRef, useRef } from "react"
// import { Button } from "react-bootstrap"
// // With forwordref
// const InputBox = forwardRef((prop , inputRef) => {
//   return <input   {...prop} ref={inputRef} />
// })

import { forwardRef, useRef } from "react";
import { Button, Card } from "react-bootstrap";
import { Pause, Play } from "react-bootstrap-icons";

// // Without forwardRef
// const InputBox2 = ( {inputRef}) => {
//   return( <input ref={inputRef} />)
// }

// function useRefHook() {
//   const inputRef = useRef()

//   return (
//     <div>
//       <InputBox  style={{background:'pink'}} inputRef={inputRef} />
//       {/* <input  ref={inputRef} /> */}
//       <InputBox2 inputRef={inputRef}/>
//       <Button onClick={() => inputRef.current.value='aman kushwaha'}>
//         Button
//       </Button>
      
//     </div>
//   )
// }

// export default useRefHook




// import { useRef, forwardRef, useState } from "react";
// import { Card } from "react-bootstrap";
// Child Component that requires forwardRef
// const MyInputCtrl = forwardRef((props, ref) => {
// return <input {...props} ref={ref} />;
// });
// Parent Component that creates and passes the ref
// const useRefHook = () => {
// const [inputVal, setInputVal] = useState();
// const ref = useRef(null);
// const handleClick = () => {
// ref.current.focus();
// setInputVal(ref.current.value);
// }

// return (
// <div>
// <MyInputCtrl ref={ref} onChange={(e) => console.log(e.target.value)} />
// <button type=
// "button" onClick={handleClick}>
// useRef in Action
// </button>
// <br />Input control's current value using useRef : {inputVal}




// </div>


// );
// }
// export default useRefHook;



// Child Component that requires forwardRef
const PlayerControls = ( videoRef ) => {
    return (
        <div className="p-2">
            <Button onClick={() => videoRef.current.play()}>
                <Play /> Play
            </Button>{" "}
            <Button onClick={() => videoRef.current.pause()}>
                <Pause /> Pause
            </Button>
        </div>
    );
};

// Parent Component that creates and passes the ref
const UseRefHook = () => {
    const videoRef = useRef(null);

    return (
        <Card>
            <video
                ref={videoRef}
                src="https://videos.pexels.com/video-files/9714260/9714260-uhd_2560_1440_30fps.mp4"
                width="100%"
                loop
                muted
            />

            <Card.Body>
                <PlayerControls videoRef={videoRef} />
            </Card.Body>
        </Card> 
    );
};

export default UseRefHook;
