'use client';

import { createContext } from 'react';

interface DialogContextType {
  isOpen: boolean;
  openDialog: () => void;
  closeDialog: () => void;
}

export const DialogContext = createContext<DialogContextType | undefined>(
  undefined,
);
