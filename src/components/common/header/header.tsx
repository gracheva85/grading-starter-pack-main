import React from 'react';
import logo from '../../../assets/img/logo.svg';
import { Contact, Menu } from '../../../consts';
import * as S from './header.styled';
import { v4 as uuidv4 } from 'uuid';
import { useAppSelector } from '../../../hooks';
import { getMenu } from '../../../store/user-process/selectors';
import { setMenu } from '../../../store/user-process/user-process';
import {store} from '../../../store/index';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import styled, { css } from 'styled-components';

const ActiveLink = styled(S.Link)<{$isActiveLink: boolean}>`
  ${({ $isActiveLink }) =>
    $isActiveLink &&
    css`
      color: ${({ theme }) => theme.color.tangerine};
    `}
`;

const Header = (): JSX.Element => {
  const currentMenu = useAppSelector(getMenu);
  const isActiveLink = (item: { name: string; route: string; }): boolean => {return item.route === currentMenu;};

  const handleMenuClick = (route: string) => {
    store.dispatch(setMenu(route));
  };
  const {pathname} = useLocation()

  useEffect(()=>{
    if (pathname !== currentMenu) {
    store.dispatch(setMenu(pathname))}
  }, [currentMenu, pathname])

  return (
  <S.StyledHeader>
    <S.HeaderWrapper>
      <S.Logo>
        <S.Image src={logo} alt="Логотип Escape Room" width="134" height="50" />
      </S.Logo>

      <S.Navigation>
        <S.Links>
        {
          Object.values(Menu).map((item: { name: string; route: string; }) => {
            return (
            <S.LinkItem key={uuidv4()}>
              <ActiveLink
                $isActiveLink={isActiveLink(item)}
                onClick={()=>{handleMenuClick(item.route)}}
                to={item.route}
              >
                {item.name}
              </ActiveLink>
            </S.LinkItem>
            )}
        )}

        </S.Links>
      </S.Navigation>
      <S.Phone href={Contact.PHONE.href}>{Contact.PHONE.text}</S.Phone>
    </S.HeaderWrapper>
  </S.StyledHeader>
)}

export default Header;
