export const Wallpaper = () => {
  return (
    <div
      className="fixed inset-0 pointer-events-none opacity-[0.03]"
      aria-hidden="true"
      style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
        backgroundSize: '40px 40px'
      }}
    />
  );
};
