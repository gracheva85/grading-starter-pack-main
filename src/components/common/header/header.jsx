import logo from 'assets/img/logo.svg';
import { Contact, Menu, Status } from 'consts';
import * as S from './header.styled';
import { v4 as uuidv4 } from 'uuid';
import { useAppSelector } from 'hooks';
import { getMenu } from 'store/user-process/selectors';
import { setMenu } from 'store/user-process/user-process';
import {store} from '../../../store/index';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { setStatus } from 'store/quest-data/quest-data';

const Header = () => {
  const currentMenu = useAppSelector(getMenu);
  const {pathname} = useLocation()

  const handleMenuClick = (item) => {
    store.dispatch(setMenu(item));
    store.dispatch(setStatus(Status.Unknown));
  };

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
          Object.values(Menu).map((item) => {
            return (
            <S.LinkItem key={uuidv4()}>
              <S.Link
                $isActiveLink={item.route === currentMenu}
                onClick={()=>{handleMenuClick(item.route)}}
                to={item.route}
              >
                {item.name}
              </S.Link>
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
