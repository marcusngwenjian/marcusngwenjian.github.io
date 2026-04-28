export const Wallpaper = () => {
  return (
    <div
      className="pointer-events-none fixed inset-0 opacity-[0.03]"
      aria-hidden="true"
      style={{
        backgroundImage:
          'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
        backgroundSize: '40px 40px',
      }}
    />
  );
};
