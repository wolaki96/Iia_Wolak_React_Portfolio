import React from 'react';
import Project from '../pages/projects';
import NovelSips from '../../assets/novelsips.png'

export default function Portfolio() {

  const project = [
      {
          name: 'Novel Sips',
          description: 'Provide a short description...',
         
          link: "https://mmllively.github.io/Novel_Sips/",
          repo: "https://github.com/mmllively/Novel_Sips/",
          img: NovelSips,
          
      },
    ];
  return (
      <div className='projectpgcontainer'>
          <h2 className='portfoliopgtitle'>Portfolio</h2>

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