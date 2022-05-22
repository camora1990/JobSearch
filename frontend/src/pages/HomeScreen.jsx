import React from 'react'

const HomeScreen = () => {
  return (
    
    <div className="row d-flex justify-content-center mt-5">
       <center><h1>Hello welcome!!!,</h1> </center>
        <div className="col-12 col-lg-6">
            <video src="/assets/videos/jobSearch.mp4" controls type="video/mp4"></video>
         
        </div>
        <center>
        <div>      
          <br></br>
          <h3>
             This video describes in a few steps what is the process of 
             <br></br>  searching and applying for job offers through JobSearch APP. 
             <br></br>You will have news before you eat a donut !!!
             <br></br>
          </h3> 
          </div> <div>  
          <h2>Very good luck!!!!</h2>  
          <img src="/assets/images/jobSearch-team.png" width="300"  />
             </div>
             </center>
    </div>

  )
}
 
export default HomeScreen