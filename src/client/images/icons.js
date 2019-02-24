import React from 'react';
import Svg, { Path, G, Circle } from 'react-native-svg';

export const Loupe = props => (
    <Svg width={17} height={13} {...props}>
      <Path
        d="M10.997 6.605c-.159 3.033-2.523 5.375-5.281 5.23-2.758-.144-4.864-2.72-4.705-5.753C1.17 3.048 3.534.706 6.29.85c2.758.144 4.865 2.72 4.706 5.754zm-.131 2.496l5.015 2.732"
        fill="#fff"
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
        fill="#fff"
        stroke="#898989"
      />
    </Svg>
)

export const FiltreBlocInactive = props => (
    <Svg width={18} height={14} {...props}>
      <Path fill="#fff" stroke="#DDD" d="M.5.5h17v13H.5z" />
    </Svg>
)

export const FiltreLignesInactive = props => (
    <Svg width={18} height={14} {...props}>
      <Path
        d="M.5 5.5h17v3H.5zm0-5h17v3H.5zm0 10h17v3H.5z"
        fill="#fff"
        stroke="#DDD"
      />
    </Svg>
)

export const FiltreBlocActive = props => (
    <Svg width={18} height={14} {...props}>
      <Path fill="#fff" stroke="#898989" d="M.5.5h17v13H.5z" />
    </Svg>
)

export const CoeurInactive = props => (
    <Svg width={22} height={19} {...props}>
      <Path
        fill="#fff"
        fillRule="evenodd"
        stroke="#EA2300"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M11 3.232C5.84-2.865-3.485 4.753 3.503 11.427 8.573 16.27 10.383 17.622 11 18c.617-.378 2.427-1.73 7.498-6.573C25.484 4.753 16.158-2.865 11 3.232"
      />
    </Svg>
)

export const CoeurActive = props => (
  <Svg width={22} height={19} {...props}>
    <Path
      fill="#D82000"
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

export const ArrowBottomLittle = props => (
    <Svg width={10} height={6} {...props}>
      <Path
        d="M.7.75l5.6 7.5m6-7.5l-5.6 7.5"
        fill="none"
        stroke="#979797"
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

export const Poubelle = props => (
  <Svg width={14} height={19} {...props}>
    <Path
      d="M9.78 15.95c-.018.271-.216.48-.448.48h-.036c-.25-.021-.43-.272-.412-.564l.555-7.774c.018-.292.233-.5.484-.48.25.02.43.271.412.564l-.556 7.773zm-2.383-.042c0 .292-.197.522-.447.522-.251 0-.448-.23-.448-.522V8.134c0-.292.197-.522.448-.522.25 0 .447.23.447.522v7.774zm-2.794.522h-.036c-.232 0-.43-.209-.447-.48l-.556-7.774c-.017-.271.162-.543.412-.564.233-.02.466.188.484.48l.555 7.774c.018.292-.161.543-.412.564zM12.52 5.063H1.38c-.216 0-.395.23-.359.48l1.272 11.932c.09.877.734 1.525 1.486 1.525h6.323c.752 0 1.397-.648 1.487-1.525L12.86 5.543c.036-.271-.125-.48-.34-.48zm-6.8-3.266a1.38 1.38 0 0 1 1.266-.81c.57 0 1.05.335 1.264.81a29.46 29.46 0 0 0-1.264-.035c-.428 0-.855.018-1.265.035m8.05 1.287c-1.05-.652-2.618-1.04-4.452-1.216A2.379 2.379 0 0 0 7.003 0c-1.14 0-2.101.81-2.315 1.868-1.835.176-3.402.564-4.453 1.216C-.193 3.348.003 4 .502 4h13.02c.482 0 .66-.652.25-.916"
      fill="#FFF"
      fillRule="evenodd"
    />
  </Svg>
)

export const Add = props => (
  <Svg width={32} height={32} {...props}>
    <G fill="none">
      <Circle cx={16} cy={16} r={16} fill="#070E37" />
      <Path
        stroke="#FFF"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9.5 16.5h13M16 10v13"
      />
    </G>
  </Svg>
)