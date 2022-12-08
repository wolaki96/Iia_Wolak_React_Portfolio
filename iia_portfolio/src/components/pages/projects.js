import React from 'react';


export default function Project(props) {
    
    return (

        <div className="projectcardscontainer">

            <div className="projectcard">
                
                
            </div>
           
                <div className='hoverprojectinfo'>
                    <h2 className='projectlinks'>
                        
                        <a href={props.link} target="_blank" rel="noreferrer" className="deployedprojectlink">
                            <img className="projectimg" alt="novelsips" src={props.img}height="250px"
  width= "400px"></img>
                            </a>

                        
                        <a href={props.repo} target="_blank" rel="noreferrer" className="githubrepoicon">
                            </a>
                    </h2>

            
                    <p className="projectinfo">{props.id}</p>
                </div>
            

        </div>

    );
};