import React from 'react';
import Project from '../pages/projects';
import NovelSips from '../../assets/novelsips.png'
import Brews from '../../assets/Homepage.png'
import PassWord from '../../assets/password.PNG'
import Jate from '../../assets/jate1.PNG'
import Inventory from '../../assets/inventory.PNG'
import Schedule from '../../assets/schedule.png'

export default function Portfolio() {

  const project = [
      {
          name: 'Novel Sips',
          description: 'Provide a short description...',
          link: "https://mmllively.github.io/Novel_Sips/",
          repo: "https://github.com/mmllively/Novel_Sips/",
          img: NovelSips
          
      },
        {
            name: 'Brews On Your Block',
            description: 'Provide a short description...',
            link: "https://mmllively.github.io/Brews_and_Cruise/",
            repo: "https://github.com/mmllively/Brews_and_Cruise",
            img: Brews
        },
        {
        name: 'PassWord',
        description: 'Provide a short description...',
        link: "https://wolaki96.github.io/password_generator/",
        repo: "https://github.com/wolaki96/password_generator",
        img: PassWord  
        },
        {
            name: 'Jate',
            description: 'Provide a short description...',
            link: "https://mysterious-fjord-62323.herokuapp.com/",
            repo: "https://github.com/wolaki96/Text_Editor",
            img: Jate   
            },
            {
                name: 'Inventory',
                description: 'Provide a short description...',
                link: "https://github.com/wolaki96/Object_Relational_Mapping/",
                repo: "https://github.com/wolaki96/Object_Relational_Mapping",
                img: Inventory   
                }, 
                {
                    name: 'Schedule',
                    description: 'Provide a short description...',
                    link: "https://wolaki96.github.io/Study_Scheduler/",
                    repo: "https://github.com/wolaki96/Study_Scheduler",
                    img: Schedule   
                    },
    ];
  return (
      <div className='projectpgcontainer'>
          <h2 className='card-title'>My Projects</h2>

          {project.map((element) => {
              return <Project name={element.name}
                  description={element.description}
                  id={element.id} link={element.link}
                  repo={element.repo} img={element.img}
              />
          })}
      </div>
  );
}