import { memo } from 'react';
import { HStack } from '@chakra-ui/layout';
import { NavTest, NavbarLink } from './Navbar.styles';

const Navbar = memo(() => (
  <NavTest>
    <HStack spacing={6}>
      <NavbarLink href="#">Map</NavbarLink>
      <NavbarLink href="#">Goals</NavbarLink>
      <NavbarLink href="#">Lexicon</NavbarLink>
    </HStack>
  </NavTest>
));

export default Navbar;
