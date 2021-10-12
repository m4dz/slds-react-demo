import React from 'react';

import { Button, IconSettings } from '@salesforce/design-system-react/';

class Buttons extends React.Component {
  static displayName = 'ButtonExample';

  render() {
    return (
      <IconSettings iconPath='/icons'>
        <div className='slds-x-small-buttons_horizontal'>
          <Button
            label='Base'
            onClick={(e) => {
              console.log('Base Button e.target:', e.target);
            }}
            variant='base'
          />

          <Button label='Neutral' />

          <Button
            iconCategory='utility'
            iconName='download'
            iconPosition='left'
            label='Neutral Icon'
          />

          <Button label='Responsive' responsive />
        </div>
      </IconSettings>
    );
  }
}

export default Buttons;
