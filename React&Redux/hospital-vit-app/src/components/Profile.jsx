// css module

import style from "./Profile.module.css"


// style-compenente css js laibary
import styled from "styled-components";

function Profile() {

     const Heading1 = styled.h1`
        background: #0d6efd;
        color: #fff;
        padding: 10px;
 `;
 const Heading3 = styled.h3`
        background: #198754;
        color: #fff;
        padding: 10px;
 `;
  return (
    <div>
        {/* <p className={style.heading1}>Aman kushwaha</p> */}
        <Heading1>aman kushwaha</Heading1>
        <Heading3>Atul kushwaha</Heading3>
      
    </div>
  )
}

export default Profile
