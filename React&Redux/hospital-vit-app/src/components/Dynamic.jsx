const UserStatus = ( { status = flase } ) => {
        return (
            <>

          {status ?
          <span className="btn btn-outline-success text-danger"> Online</span>
          :
          <span className="btn btn-outline-success text-danger"> Ofline</span>


          }

        
            </>
        )




           
            
            //    <span
            //        className={`btn border-${status ? "success" : "danger"} text-${
            //            status ? "success" : "danger"
            //         }`}>
            //         {status ? "Online" : "Offline" }
            //     </span>
         
 };
 export default UserStatus