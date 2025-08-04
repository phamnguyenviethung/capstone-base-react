import * as React from 'react';
import { Outlet, createRootRoute } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import { useTranslation } from 'react-i18next';

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  const { t } = useTranslation();
  return (
    <React.Fragment>
      <div>{t('Hi')} "__root"!</div>
      <Outlet />
      <TanStackRouterDevtools />
    </React.Fragment>
  );
}
