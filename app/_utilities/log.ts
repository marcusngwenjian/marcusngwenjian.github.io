const isSandbox = process.env.NODE_ENV !== 'production';

export const log = {
  error: isSandbox ? console.error.bind(console) : () => {},
  debug: isSandbox ? console.debug.bind(console) : () => {},
};
