import React from 'react';

export default function Mute(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" enableBackground="new 0 0 64 64" width={64} height={64} {...props}>
      <circle cx={32} cy={32} r={30} fill="#ff5a79" />
      <circle cx={32} cy={32} r={24} fill="#333" />
      <path d="m41.5 28.1v-7.2-7c0-.5-.4-.9-.9-.9s-.9.4-.9.9v.5l-14.1 9.9h-6.2c-1.2 0-2.3.9-2.3 2.1v2.1 7.1 2.1c0 1.2 1 2.1 2.3 2.1h6.2l14.1 9.9v.5c0 .5.4.9.9.9s.9-.4.9-.9v-7-7.2c2.3 0 4.2-1.7 4.2-3.9 0-2.2-1.9-4-4.2-4" fill="#fff" />
      <path transform="matrix(.7071-.7071.7071.7071-13.2556 32.0003)" fill="#ff5a79" d="m29 2.8h6v58.4h-6z" />
    </svg>
  );
}
