interface HeartIconProps {
  className?: string;
}

export function HeartIcon({ className }: HeartIconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <path
        d="M12 21s-7.5-4.7-9.6-9C.9 8.9 2.6 5.5 5.9 5.1c1.9-.2 3.7.7 4.7 2.2-.4-2 .8-4.1 2.9-4.7 2.7-.8 5.4 1 5.9 3.8.8 4.6-5.2 10.3-7.4 12.6z"
        fill="currentColor"
      />
    </svg>
  );
}
