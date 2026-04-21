"use client";

import type { ComponentProps } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useDialogContext } from "./lib/hooks";

type DialogContentProps = ComponentProps<typeof motion.div>;

export const DialogContent = ({ children, ...props }: DialogContentProps) => {
  const { isOpen, closeDialog } = useDialogContext();

  return (
    <AnimatePresence>
      {isOpen && (
        // Backdrop (The Dialog Overlay with Opacity Animation)
        <motion.div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeDialog}
        >
          {/* Main Content */}
          <motion.div
            className="bg-card rounded-xl shadow-2xl w-full max-w-lg overflow-hidden transform"
            initial={{ scale: 0.9, y: 50 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 50 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            onClick={(e) => {
              e.stopPropagation(); // Prevent closing when clicking content
            }}
            {...props}
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
