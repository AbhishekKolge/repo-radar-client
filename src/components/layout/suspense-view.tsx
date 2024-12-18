import { Suspense } from 'react';
import TopBarProgress from 'react-topbar-progress-indicator';
import { TOP_BAR_CONFIG } from '@/shared/utils';

interface SuspenseViewProps {
  children: React.ReactNode;
}

TopBarProgress.config(TOP_BAR_CONFIG);

export const SuspenseView: React.FC<SuspenseViewProps> = (props) => {
  const { children } = props;

  return <Suspense fallback={<TopBarProgress />}>{children}</Suspense>;
};
