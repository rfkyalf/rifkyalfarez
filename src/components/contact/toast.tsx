'use client';

import { Bounce, toast } from 'react-toastify';

export const ToastSuccess = ({ message }: { message: string }) => {
  toast.success(message, {
    position: 'top-right',
    transition: Bounce,
    theme: 'light',
  });
};

export const ToastError = ({ message }: { message: string }) => {
  toast.error(message, {
    position: 'top-right',
    transition: Bounce,
    theme: 'light',
  });
};
