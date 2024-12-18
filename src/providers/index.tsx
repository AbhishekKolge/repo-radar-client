import { Provider as ReduxProvider } from 'react-redux';
import { AuthChecker, SuspenseView } from '@/components/layout';
import { Toaster } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { store } from '@/store';

export const Provider = () => {
  return (
    <ReduxProvider store={store}>
      <TooltipProvider>
        <SuspenseView>
          <AuthChecker />
        </SuspenseView>
        <Toaster richColors toastOptions={{}} />
      </TooltipProvider>
    </ReduxProvider>
  );
};
