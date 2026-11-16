export default function PhotoPlaceholder({ label, className = '' }) {
  return <div className={`photo-placeholder ${className}`} role="img" aria-label={label}><span aria-hidden="true">{label}</span></div>;
}
