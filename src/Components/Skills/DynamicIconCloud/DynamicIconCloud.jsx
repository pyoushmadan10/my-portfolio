import React, { useState, useEffect } from 'react';
import { Cloud, renderSimpleIcon, fetchSimpleIcons } from 'react-icon-cloud';
import './DynamicIconCloud.scss';

const useIcons = (slugs) => {
  const [icons, setIcons] = useState();

  useEffect(() => {
    fetchSimpleIcons({ slugs }).then(setIcons);
  }, [slugs]);

  if (icons) {
    return Object.values(icons.simpleIcons).map((icon) =>
      renderSimpleIcon({
        icon,
        size: 42,
        aProps: {
          onClick: (e) => e.preventDefault(),
        },
      })
    );
  }

  return <a>Loading</a>;
};

const slugs = [
  'javascript',
  'react',
  'html5',
  'css3',
  'firebase',
  'git',
  'github',
  'gitlab',
  'visualstudiocode',
  'figma',
  'python',
  'flask',
  'opencv',
  'sass',
  'numpy',
  'pandas',
  'scrapy',
  'tensorflow',
  'mui',
  'keras',
  'pycharm',
  'anaconda',
  'tailwindcss'
];

const DynamicIconCloud = () => {
  const icons = useIcons(slugs);

  const options = {
    reverse: true,
    depth: 1,
    wheelZoom: false,
    imageScale: 2,
    activeCursor: 'default',
    tooltip: 'native',
    initial: [0.1, -0.1],
    clickToFront: 500,
    tooltipDelay: 0,
    outlineColour: '#0000',
    maxSpeed: 0.03,
    minSpeed: 0.01,
  };

  return (
    // <div className='container-icon'>
      <Cloud options={options}>{icons}</Cloud>
    // </div>
  );
};

export default DynamicIconCloud;
