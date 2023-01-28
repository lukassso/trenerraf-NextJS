import * as React from 'react';
import { SVGProps } from 'react';

// width={195} height={12}
const HeadlineCurveSvg = (props: SVGProps<SVGSVGElement>) => (
  <svg width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M2.1 9.093C54.79.002 118.162-2.267 192.203 2.263c1.76.107 3 .86 2.769 1.682-.23.821-1.844 1.4-3.604 1.292C118.297.767 55.958 2.998 4.33 11.907c-1.665.287-3.514-.11-4.13-.887-.615-.777.235-1.64 1.9-1.927Z"
      fill="#FDC100"
    />
  </svg>
);

export default HeadlineCurveSvg;
