import { toast } from 'sonner';

export const successToast = (message: string) => {
  toast.success('Success', {
    description: message,
  });
};

export const errorToast = (message: string) => {
  toast.error('Error', {
    description: message,
  });
};

export const warningToast = (message: string) => {
  toast.warning('Warning', {
    description: message,
  });
};

export const defaultToast = (message: string) => {
  toast.info('Info', {
    description: message,
  });
};
