import type { avatarSize } from './constants';

export type AvatarSize = (typeof avatarSize)[keyof typeof avatarSize];
