import * as S from './booking-modal.styled';
import { ReactComponent as IconClose } from '../../../../assets/img/icon-close.svg';
import {store} from '../../../../store/index'
import { postOrderAction } from '../../../../store/api-actions';
import { ChangeEvent, FormEvent, useCallback, useEffect, useRef, useState } from 'react';

type BookingModalProps = {
  onCloseBtnClick: (parametr: boolean) => void,
  peopleCounts: number[],
}

const BookingModal = ({onCloseBtnClick, peopleCounts}: BookingModalProps): JSX.Element => {
  const ESC_KEY_CODE = "Escape";

  const nameRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const peopleCountRef = useRef<HTMLInputElement>(null);
  const isLegalRef = useRef(null);

  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [people, setPeople] = useState<number>(0);

  const handleNameInputChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setName(evt.target.value);
  };

  const [number, setNumber] = useState('');

   const handlePhoneChange = (evt: ChangeEvent<HTMLInputElement>) => {
    if (!phoneRef.current) return;
    const onlyDigits = evt.target.value.replace(/\D/g, "");
    setNumber(onlyDigits);
    setPhone(evt.target.value);
    if (!phoneRef.current.value.match(/^[0-9]{10}$/) ) {
      phoneRef.current.setCustomValidity('Телефон должен содержать 10 цифр');
    } else {
      phoneRef.current.setCustomValidity('');
    }
  }

  const handlePeopleInputChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setPeople(+evt.target.value);
  };

  const escFunction = useCallback((event: { key: string; }) => {
    if (event.key === ESC_KEY_CODE) {
      onCloseBtnClick(false);
    }
  }, [onCloseBtnClick]);

  useEffect(() => {
    document.addEventListener("keydown", escFunction, false);
    return () => {
      document.removeEventListener("keydown", escFunction, false);
    };
  }, [escFunction]);


  return (
  <S.BlockLayer>
    <S.Modal>
      <S.ModalCloseBtn onClick={useCallback(() => {onCloseBtnClick(false)}, [onCloseBtnClick])}>
        <IconClose width="16" height="16" />
        <S.ModalCloseLabel >Закрыть окно</S.ModalCloseLabel>
      </S.ModalCloseBtn>
      <S.ModalTitle>Оставить заявку</S.ModalTitle>
      <S.BookingForm
        action="https://echo.htmlacademy.ru"
        method="post"
        id="booking-form"
        onSubmit={(evt: FormEvent<HTMLFormElement>)=>{
            evt.preventDefault();
            store.dispatch(postOrderAction({
              name: name,
              peopleCount: people,
              phone: phone,
              isLegal: true,
            }));
            onCloseBtnClick(false);
          }
        }
      >
        <S.BookingField>
          <S.BookingLabel htmlFor="booking-name">Ваше Имя</S.BookingLabel>
          <S.BookingInput
            type="text"
            id="booking-name"
            name="booking-name"
            placeholder="Имя"
            ref={nameRef}
            onChange={handleNameInputChange}
            required
          />
        </S.BookingField>
        <S.BookingField>
          <S.BookingLabel htmlFor="booking-phone">
            Контактный телефон
          </S.BookingLabel>
          <S.BookingInput
            type="tel"
            id="booking-phone"
            name="booking-phone"
            placeholder="Телефон"
            ref={phoneRef}
            max="10"
            value={number}
            onChange={handlePhoneChange}
            required
          />
        </S.BookingField>
        <S.BookingField>
          <S.BookingLabel htmlFor="booking-people">
            Количество участников
          </S.BookingLabel>
          <S.BookingInput
            type="number"
            id="booking-people"
            name="booking-people"
            placeholder="Количество участников"
            ref={peopleCountRef}
            min={peopleCounts[0]}
            max={peopleCounts[1]}
            onChange={handlePeopleInputChange}
            required
          />
        </S.BookingField>
        <S.BookingSubmit type="submit">Отправить заявку</S.BookingSubmit>
        <S.BookingCheckboxWrapper>
          <S.BookingCheckboxInput
            type="checkbox"
            id="booking-legal"
            name="booking-legal"
            ref={isLegalRef}
            required
          />
          <S.BookingCheckboxLabel
            className="checkbox-label"
            htmlFor="booking-legal"
          >
            <S.BookingCheckboxText>
              Я согласен с{' '}
              <S.BookingLegalLink href="#">
                правилами обработки персональных данных и пользовательским
                соглашением
              </S.BookingLegalLink>
            </S.BookingCheckboxText>
          </S.BookingCheckboxLabel>
        </S.BookingCheckboxWrapper>
      </S.BookingForm>
    </S.Modal>
  </S.BlockLayer>
);}

export default BookingModal;
