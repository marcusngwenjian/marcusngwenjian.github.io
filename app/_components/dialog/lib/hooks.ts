"use client";

import { useContext } from "react";
import { DialogContext } from "../DialogContext";

export const useDialogContext = () => {
  const context = useContext(DialogContext);
  if (context === undefined) {
    throw new Error("useDialogContext must be used within a DialogProvider");
  }
  return context;
};
