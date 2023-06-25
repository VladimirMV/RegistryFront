import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from 'modules/SharedLayout';
import { RestrictedRoute } from './RestrictedRoute';
import { Loader } from './Loader/Loader';
import { PrivateRoute } from './PrivateRoute';

const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const ContactsPage = lazy(() => import('pages/ContactsPage/ContactsPage'));
const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'));
const RegistrationPage = lazy(() => import('pages/RegistrationPage/RegistrationPage'));
const PageNotFound = lazy(() => import('pages/PageNotFound/PageNotFound'));

// import HomePage from '../pages/HomePage/HomePage';
// import ContactsPage from '../pages/ContactsPage/ContactsPage';
// import LoginPage from '../pages/LoginPage/LoginPage';
// import RegistrationPage from '../pages/RegistrationPage/RegistrationPage';
// import PageNotFound from '../pages/PageNotFound/PageNotFound';

const UserRoutes = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route
            path="register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<RegistrationPage />}
              />
            }
          />
          <Route
            path="login"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<LoginPage />}
              />
            }
          />
          <Route
            path="contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
            }
          />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default UserRoutes;
// Данный код экспортирует компонент UserRoutes, который отвечает за рендеринг роутов приложения. 
// Он использует react - router для маршрутизации.

// Компонент UserRoutes включает в себя компонент Suspense для отображения индикатора загрузки(Loader) 
// во время асинхронной загрузки компонентов страниц.Кроме этого, также используются компоненты PrivateRoute и RestrictedRoute, которые управляют доступом к роутам в зависимости от того, является ли пользователь авторизованным.

// Роуты приложения включают в себя следующие страницы:

// Главная страница HomePage
// Страница контактов ContactsPage, доступная только авторизованным пользователям (PrivateRoute)
// Страница логина LoginPage, доступная только неавторизованным пользователям (RestrictedRoute)
// Страница регистрации RegistrationPage, доступная только неавторизованным пользователям (RestrictedRoute)
// Страница 404 ошибки PageNotFound
// Импорты из модуля modules/SharedLayout н