import React from "react";
import {spinner} from "reactstrap"; // componente spinner
import "bootstrap/dis/css/bootstrap.min.css" // holas de estio css pa poder usar bs
function Loading(){
    return(
        <div classname="Loading">
            <spinner color="white" />
             <br/>  <br/> <br/> <br/> 
        </div>

)

} 
export default Loading;