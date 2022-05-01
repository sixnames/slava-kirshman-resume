import * as React from 'react';
import classNames from 'classnames';
import Button, { ButtonVariant } from '../components/buttons/Button';
import useAsideState from '../hooks/useAsideState';
import IconPrint from '../components/icons/IconPrint';
import IconMenuOpen from '../components/icons/IconMenuOpen';
import IconMenuClose from '../components/icons/IconMenuClose';

const Index = () => {
  const { isAsideOpen, toggleAside } = useAsideState();
  const asideStateClassname = classNames({
    'visually-visible': isAsideOpen,
    'visually-hidden': !isAsideOpen,
  });

  return (
    <div className='relative h-full min-w-[320px] bg-white md:grid md:grid-cols-12'>
      {/*aside*/}
      <aside
        className={`z-20 bg-gray-800 md:relative md:col-span-4 md:h-auto md:w-auto md:overflow-y-auto md:overflow-x-hidden md:whitespace-normal lg:col-span-2 ${asideStateClassname}`}
      >
        <div className='prose px-4 py-12 text-gray-200'>Aside</div>
      </aside>

      {/*content*/}
      <main className='prose relative z-10 px-6 py-12 sm:px-8 md:col-span-8 lg:col-span-10'>
        <h1>Welcome!</h1>
        <p>My resume will appear here very soon</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aperiam atque fugit impedit
          ipsum laudantium maxime nisi odio optio porro provident quas recusandae rerum, sed sunt,
          vel vero? Ex, minus?
        </p>
      </main>

      {/*controls*/}
      <div className='fixed right-4 bottom-4 z-30 space-y-2 sm:right-6 sm:bottom-6 md:hidden'>
        <Button onClick={toggleAside} variant={ButtonVariant.MENU}>
          {isAsideOpen ? <IconMenuClose /> : <IconMenuOpen />}
        </Button>
        <Button variant={ButtonVariant.PRINT}>
          <IconPrint />
        </Button>
      </div>
    </div>
  );
};

export default Index;
