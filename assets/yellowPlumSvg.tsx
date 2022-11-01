import * as React from 'react';
import { SVGProps } from 'react';

const YellowPlumSvg = (props: SVGProps<SVGSVGElement>) => (
  <svg width={899} height={814} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M156.727 169.359C223 82.5 367.5 10.585 716.839 10.585 1066.18 10.585 871 763.5 475.944 804.673 80.887 845.846 31.227 732.859 13.227 661c-18-71.858 77.226-404.783 143.5-491.641Z"
      fill="#000"
    />
    <path
      d="M145.727 159.359C212 72.5 356.5.585 705.839.585 1055.18.585 860 753.5 464.944 794.673 69.887 835.846 20.227 722.859 2.227 651c-18-71.858 77.226-404.783 143.5-491.641Z"
      fill="url(#a)"
    />
    <defs>
      <radialGradient
        id="a"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="rotate(121.499 205.535 283.91) scale(293.79 311.209)"
      >
        <stop stopColor="#F90" />
        <stop offset={0.969} stopColor="#F9B619" />
      </radialGradient>
    </defs>
  </svg>
);

export default YellowPlumSvg;
