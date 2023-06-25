import { useDispatch } from 'react-redux';
import { logOutUser } from 'redux/auth/auth-operations';
import { StyledBadge, Wrapper } from './UserMenu.styled';
import { useAuth } from 'hooks/useAuth';
import { Avatar, Chip } from '@mui/material';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const handleLogOut = () => dispatch(logOutUser());

  return (
    <Wrapper>
      <p> {user.name}</p>

      <Chip
        avatar={
          <StyledBadge
            overlap="circular"
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            variant="dot"
          >
            <Avatar
              alt="avatar"
              src={`https://api.dicebear.com/6.x/croodles/svg`}
              sx={{ width: 24, height: 24 }}
            />
          </StyledBadge>
        }
        label="LogOut"
        variant="outlined"
        onClick={handleLogOut}
        sx={{
          border: '1px solid #dfcece',
          color: '#000000',
          textShadow: '-1px -1px 1px #ffffff31, 1px 1px 1px #00000031',
          boxShadow: 3,
        }}
      />
    </Wrapper>
  );
};
// Этот код экспортирует компонент React UserMenu, который представляет меню пользователя с 
// возможностью выхода из аккаунта.

// Он импортирует несколько зависимостей, в частности, useDispatch из react - redux, который 
// предоставляет функцию диспетчера для отправки действий в хранилище Redux, а также действие 
// logOutUser из auth - operations для выхода из аккаунта.

// Компонент UserMenu использует пользовательский хук useAuth, чтобы получить информацию о 
// текущем пользователе, и вызывает handleLogOut при нажатии на кнопку "LogOut", которая отправляет действие logOutUser с помощью dispatch.

// Возвращаемое значение UserMenu является разметкой JSX, которая содержит имя пользователя,
//   аватар пользователя и кнопку "LogOut".Аватар создается с помощью Dicebear API, который 
//   предоставляет генераторы случайных аватаров.Кнопка "LogOut" 
// имеет несколько стилей, таких как цвет границы, цвет текста и тени текста.