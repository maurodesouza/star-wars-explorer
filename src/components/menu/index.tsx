import { useState } from 'react';
import Link from 'next/link';

import { Menu as MenuIcon } from '@styled-icons/material/Menu';
import { Close as CloseIcon } from '@styled-icons/material/Close';

import { Logo, Footer } from 'components';

import { links } from './links';
import * as S from './styles';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = links.map(link => (
    <Link key={link.path} href={link.path} passHref>
      <S.MenuLink>{link.label}</S.MenuLink>
    </Link>
  ));

  return (
    <S.Container>
      <Logo />

      <S.MenuNav>{navLinks}</S.MenuNav>

      <S.IconWrapper onClick={() => setIsOpen(true)}>
        <MenuIcon aria-label="Open menu" />
      </S.IconWrapper>

      <S.MenuFull aria-hidden={!isOpen} isOpen={isOpen}>
        <S.IconWrapper onClick={() => setIsOpen(false)}>
          <CloseIcon aria-label="Close menu" />
        </S.IconWrapper>

        <S.MenuNav>{navLinks}</S.MenuNav>

        <Footer />
      </S.MenuFull>
    </S.Container>
  );
};

export { Menu };
