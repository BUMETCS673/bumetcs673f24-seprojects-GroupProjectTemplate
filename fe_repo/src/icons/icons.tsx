import * as React from 'react';

type IconProps = {
  width?: number;
  height?: number;
}
export const uploadIcon = (props: IconProps) => {
  return <svg width={props.width ?? '20px'} height={props.height ?? '20px'} stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000">
    <path d="M12 22V13M12 13L15.5 16.5M12 13L8.5 16.5" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
    <path d="M20 17.6073C21.4937 17.0221 23 15.6889 23 13C23 9 19.6667 8 18 8C18 6 18 2 12 2C6 2 6 6 6 8C4.33333 8 1 9 1 13C1 15.6889 2.50628 17.0221 4 17.6073" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
  </svg>
}
