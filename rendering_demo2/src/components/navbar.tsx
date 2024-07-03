import React from 'react'
import NavLinks from './NavLinks';
import NavSearch from './NavSearch';

const Navbar = () => {
    console.log(`Navbar rendered`);
  return (
    <div>
      <NavLinks />
      <NavSearch />
    </div>
  )
}

export default Navbar
