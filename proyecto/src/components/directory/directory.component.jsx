import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: 'BICICLETAS',
          imageUrl: 'https://assets.entrepreneur.com/content/3x2/2000/20160419164404-Depositphotos-32428429-l-2015.jpeg',
          id: 1
        },
        {
          title: 'TOMATODOS',
          imageUrl: 'https://www.graficmerch.com/gfmrhwp/wp-content/uploads/2018/10/TOMATODO-CON-METAL-1.jpg',
          id: 2
        }
      ]
    };
  }

  render() {
    return (
      <div className='directory-menu'>
        {this.state.sections.map(({ title, imageUrl, id, size }) => (
          <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
        ))}
      </div>
    );
  }
}

export default Directory;