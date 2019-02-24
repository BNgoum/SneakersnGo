import React from 'react'
import Svg, { Path, G } from 'react-native-svg'

export const HomeInactiveSvg = props => (
    <Svg width={17} height={18} {...props}>
      <Path
        fill="#fff"
        fillRule="evenodd"
        stroke="#4A4949"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.444 1L1 6.277V17h15V6.385z"
      />
    </Svg>
)


export const HomeActiveSvg = props => (
    <Svg width={17} height={18} {...props}>
      <Path
        fill="#fff"
        fillRule="evenodd"
        stroke="#070E37"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M8.444 1L1 6.277V17h15V6.385z"
      />
    </Svg>
)

export const ResearchActiveSvg = props => (
    <Svg width={31} height={21} {...props}>
      <G
        fill="#fff"
        fillRule="evenodd"
        stroke="#070E37"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.3}
      >
        <Path d="M1.84 20.3l28.116-8.061-2.18-7.604S25.504 1.861 25.21 1.59c-.293-.27-.797-.667-1.183-.347-.387.319-.166.619-.185 1.295-.04 2.991-3.8 3.197-5.18 2.49-1.069-.44-2.305-2.161-3.855-.904-1.66 1.354-10.172 8.679-10.172 8.679L1.144 14.73l-.11 2.754.806 2.817m-.8-2.817L29.111 9.43M6.323 11.464l.83 4.167" />
        <Path d="M6.802 13.69l8.309-6.631 2.814-2.246m3.588.672s.533 2.17 2.883.394c2.35-1.776 3.38-1.244 3.38-1.244M15.005 7.203l3.796.492c.567.082.831.396.731.888l-1.21 3.853M7.967 8.465l1.324 1.54m.811-3.332l1.325 1.54m.753-3.292l1.325 1.54" />
      </G>
    </Svg>
)

export const ResearchInactiveSvg = props => (
  <Svg width={31} height={21} {...props}>
    <G
      fill="#fff"
      fillRule="evenodd"
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={0.75}
    >
      <Path d="M1.84 20.3l28.116-8.061-2.18-7.604S25.504 1.861 25.21 1.59c-.293-.27-.797-.667-1.183-.347-.387.319-.166.619-.185 1.295-.04 2.991-3.8 3.197-5.18 2.49-1.069-.44-2.305-2.161-3.855-.904-1.66 1.354-10.172 8.679-10.172 8.679L1.144 14.73l-.11 2.754.806 2.817m-.8-2.817L29.111 9.43M6.323 11.464l.83 4.167" />
      <Path d="M6.802 13.69l8.309-6.631 2.814-2.246m3.588.672s.533 2.17 2.883.394c2.35-1.776 3.38-1.244 3.38-1.244M15.005 7.203l3.796.492c.567.082.831.396.731.888l-1.21 3.853M7.967 8.465l1.324 1.54m.811-3.332l1.325 1.54m.753-3.292l1.325 1.54" />
    </G>
  </Svg>
)

export const WishListActiveSvg = props => (
    <Svg width={21} height={18} {...props}>
      <Path
        fill="#fff"
        fillRule="evenodd"
        stroke="#070E37"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10.5 3.1C5.6-2.637-3.26 4.533 3.378 10.815 8.194 15.371 9.914 16.644 10.5 17c.586-.356 2.306-1.629 7.123-6.186C24.26 4.532 15.4-2.638 10.5 3.101"
      />
    </Svg>
)

export const WishListInactiveSvg = props => (
    <Svg width={21} height={18} {...props}>
      <Path
        fill="#fff"
        fillRule="evenodd"
        stroke="#4A4949"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10.5 3.1C5.6-2.637-3.26 4.533 3.378 10.815 8.194 15.371 9.914 16.644 10.5 17c.586-.356 2.306-1.629 7.123-6.186C24.26 4.532 15.4-2.638 10.5 3.101"
      />
    </Svg>
)

export const ChatActiveSvg = props => (
  <Svg width={22} height={19} {...props}>
    <Path
      fill="#fff"
      fillRule="evenodd"
      stroke="#070E37"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15.637 5.43H5.908h9.729zm3.993 0h-4.607v-.108A4.328 4.328 0 0 0 10.699 1a4.328 4.328 0 0 0-4.325 4.322v.108H1.767a.766.766 0 0 0-.734.986l3.21 10.743a1.15 1.15 0 0 0 1.102.821h10.707c.508 0 .956-.334 1.102-.821l3.211-10.743a.767.767 0 0 0-.735-.986z"
    />
  </Svg>
)

export const ChatInactiveSvg = props => (
  <Svg width={21} height={19} {...props}>
    <Path
      fill="#fff"
      fillRule="evenodd"
      stroke="#4A4949"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.637 5.43H5.908h9.729zm3.993 0h-4.607v-.108A4.328 4.328 0 0 0 10.699 1a4.328 4.328 0 0 0-4.325 4.322v.108H1.767a.766.766 0 0 0-.734.986l3.21 10.743a1.15 1.15 0 0 0 1.102.821h10.707c.508 0 .956-.334 1.102-.821l3.211-10.743a.767.767 0 0 0-.735-.986z"
    />
  </Svg>
)

export const ActiveIcon = props => (
    <Svg width={3} height={7} {...props}>
      <Path fill="#EA2300" d="M0 0h3v7H0z" />
    </Svg>
)

export const UserActiveSvg = props => (
    <Svg width={20} height={19} {...props}>
      <Path
        d="M14 5.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 .001zM19 18l-2.7-5H3.7L1 18"
        fill="#fff"
        fillRule="evenodd"
        stroke="#070E37"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      />
    </Svg>
)

export const UserInactiveSvg = props => (
    <Svg width={20} height={17} {...props}>
      <Path
        d="M14 5.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 .001zM19 17l-2.7-5H3.7L1 17"
        fill="#fff"
        fillRule="evenodd"
        stroke="#4A4949"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
  
