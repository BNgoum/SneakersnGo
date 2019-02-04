import React from 'react';
import Svg, { Path } from 'react-native-svg';

export const Loupe = props => (
    <Svg width={17} height={13} {...props}>
      <Path
        d="M10.997 6.605c-.159 3.033-2.523 5.375-5.281 5.23-2.758-.144-4.864-2.72-4.705-5.753C1.17 3.048 3.534.706 6.29.85c2.758.144 4.865 2.72 4.706 5.754zm-.131 2.496l5.015 2.732"
        fill="none"
        fillRule="evenodd"
        stroke="#9B9B9B"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
    </Svg>
)

export const FiltreLignesActive = props => (
    <Svg width={18} height={14} {...props}>
      <Path
        d="M.5 5.5h17v3H.5zm0-5h17v3H.5zm0 10h17v3H.5z"
        fill="none"
        stroke="#898989"
      />
    </Svg>
)

export const FiltreBlocInactive = props => (
    <Svg width={18} height={14} {...props}>
      <Path fill="none" stroke="#DDD" d="M.5.5h17v13H.5z" />
    </Svg>
)

export const FiltreLignesInactive = props => (
    <Svg width={18} height={14} {...props}>
      <Path
        d="M.5 5.5h17v3H.5zm0-5h17v3H.5zm0 10h17v3H.5z"
        fill="none"
        stroke="#DDD"
      />
    </Svg>
)

export const FiltreBlocActive = props => (
    <Svg width={18} height={14} {...props}>
      <Path fill="none" stroke="#898989" d="M.5.5h17v13H.5z" />
    </Svg>
)

export const CoeurInactive = props => (
    <Svg width={22} height={19} {...props}>
      <Path
        fill="none"
        fillRule="evenodd"
        stroke="#EA2300"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M11 3.232C5.84-2.865-3.485 4.753 3.503 11.427 8.573 16.27 10.383 17.622 11 18c.617-.378 2.427-1.73 7.498-6.573C25.484 4.753 16.158-2.865 11 3.232"
      />
    </Svg>
)

export const Croix = props => (
    <Svg width={11} height={11} {...props}>
      <Path
        d="M1.11.95l9.193 9.193m0-9.193l-9.192 9.193"
        fill="none"
        stroke="#070E37"
        strokeLinecap="square"
      />
    </Svg>
)

export const ArrowBottom = props => (
    <Svg width={13} height={9} {...props}>
      <Path
        d="M.7.75l5.6 7.5m6-7.5l-5.6 7.5"
        fill="none"
        stroke="#979797"
        strokeLinecap="square"
      />
    </Svg>
)

export const ArrowBottomBig = props => (
  <Svg width={13} height={9} {...props}>
    <Path
      d="M.7.75l5.6 7.5m6-7.5l-5.6 7.5"
      fill="none"
      stroke="#979797"
      strokeLinecap="square"
    />
  </Svg>
)

export const Apostrophes = props => (
  <Svg width={48} height={29} {...props}>
    <Path
      d="M9.841.021c4.5 0 8.28 3.42 9 7.92.18.9.18 1.98.18 2.88 0 9.9-8.1 18.18-16.2 18.18v-1.8c3.96 0 9.72-4.32 10.8-9.9-1.08.54-2.52.9-3.78.9-5.04 0-9-3.96-9-9s3.96-9.18 9-9.18m28.979 0c4.5 0 8.28 3.42 9 7.92.18.9.18 1.98.18 2.88 0 9.9-8.1 18.18-16.2 18.18v-1.8c3.96 0 9.72-4.32 10.8-9.9-1.08.54-2.52.9-3.78.9-5.04 0-9-3.96-9-9s3.96-9.18 9-9.18"
      fill="#D82000"
      fillRule="evenodd"
    />
  </Svg>
)