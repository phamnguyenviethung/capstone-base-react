import * as React from 'react';
import { Outlet, createRootRoute } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import { useTranslation } from 'react-i18next';
import useAppStore from '@/configs/store.config';

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  const { t } = useTranslation();
  const store = useAppStore();
  return (
    <React.Fragment>
      <div>{t('Hi')} "__root"!</div>
      <div>Store test value: {store.test}</div>
      <Outlet />
      <TanStackRouterDevtools />
    </React.Fragment>
  );
}
