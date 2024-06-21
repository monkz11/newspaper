import { useState } from 'react';
import Link from 'next/link';
import { Menu, MenuButton, MenuItem } from '@headlessui/react';

const DropdownMenu = () => {
  return (
    <details className="dropdown">
      <summary className="m-1 btn">open or close</summary>
        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
          <li><a>Item 1</a></li>
          <li><a>Item 2</a></li>
        </ul>
    </details>
  );
};

export default DropdownMenu;