import type { buttonSize, buttonVariant } from './constants';

export type ButtonVariant = (typeof buttonVariant)[keyof typeof buttonVariant];

export type ButtonSize = (typeof buttonSize)[keyof typeof buttonSize];
