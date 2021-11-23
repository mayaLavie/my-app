import React from 'react'
import '../Projects/Projects.css'

const ProjectsComp = () => {
    return (
        <div class="ProjectsBody">
         <section class="p-5 marge mb-5 mt-5">
           <div class="container-fluid">
              <h1 class="Head text-center" >My Projects</h1>
            <div class="row  g-5 ">
                <div class="col-sm " >
                    <a class=" card-body card-expand-sm border-dark text-light" href="/"   >
                        <div class="card-body  bg-dark ">
                         <h3 class="card-title mb-3 ">TUESDAY</h3>
                         <p class="card-text ">MEAN stack website managing personal tasks and posts for each user. </p><br/>
                                        <p class="card-text">Angular | Express | Node.JS | MongoDB </p>
                          <a href="https://github.com/mayaLavie/Mean-stack-Tasks-and-Posts-Manager" class="btn btn-outline-light">Github Link</a>
                        </div>
                    </a>
               </div>
                  <div class="col-sm">
                     <a class=" card-body card-expand-sm  border-dark text-light" href="/">
                       <div class="card-body  bg-dark ">
                         <h3 class="card-title mb-3">IMDBIL</h3>
                         <p class="card-text">MERN stack website manages movie subscriptions.
                                    Anyone who is authorized (using JWT) can subscribe for a new movie. </p>
                                    <p class="card-text">React Hooks | Express | Node.JS | MongoDB </p>
                           <a href="https://github.com/mayaLavie/Mern-Stack-Movie-Subscription-Manager" class="btn btn-outline-light">Github Link</a>
                       </div>
                    </a>
                  </div>
                  <div class="col-sm ">
                    <a class=" card-body card-expand-sm border-dark text-light" href="/">
                       <div class="card-body  bg-dark ">
                          <h3 class="card-title mb-3 ">FACTORY 54</h3>
                             <p class="card-text">Full management website including employees registrarion,department creation, shifts assignment and user administration. </p>
                                        <p class="card-text">ASP.NET | SQL  | .Net MVC  </p>
                          <a href="https://github.com/mayaLavie/Factory54" class="button btn btn-outline-light">Github Link</a>
                       </div>
                    </a>
                 </div>   
              </div>
           </div>
         </section>
     </div>
    )
}

export default ProjectsComp
