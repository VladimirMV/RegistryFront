import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
// import { Container } from './SharedLayout.styled';
import { Container } from './SharedLayout.styled';
import Header from './Header/Header';

export const SharedLayout = () => {
  return (
    <>
      <Container>
        <Header />
        <main>
          <Suspense fallback={<div>Loading....</div>}>
            <Outlet />
          </Suspense>
        </main>
        {/* <Footer /> */}
      </Container>
    </>
  );
};
// Данный код экспортирует компонент SharedLayout, который является общим макетом
// веб - страниц для других компонентов React приложения.

// Ниже приведено описание структуры данного компонента:

// <Container> — это компонент-контейнер, который создает область page, содержащую основные элементы страницы.
// <Header> — это компонент для создания заголовка страницы.
// <main> — это элемент main HTML, который содержит основной контент страницы.
// <Suspense> — это компонент, используемый для ленивой загрузки дочерних компонентов.
// Он принимает параметры: fallback, который указывает, что необходимо отображать
// во время загрузки компонента, а также содержит дочерний компонент Outlet.
// <Outlet> — это компонент, который вложен в <Suspense>. Его задача заключается в том,
// что он отображает содержимое дочерних маршрутов, связанных с главным маршрутом приложения.
 