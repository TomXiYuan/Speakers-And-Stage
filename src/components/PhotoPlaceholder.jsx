const IMAGE_PATH = /\.(png|jpe?g|webp)$/i;
export default function PhotoPlaceholder({ label, alt = '', className = '' }) {
  if (typeof label === 'string' && label.startsWith('/') && IMAGE_PATH.test(label)) {
    return <div className={`photo-placeholder photo-image ${className}`}><img src={label} alt={alt} loading="lazy" /></div>;
  }
  return <div className={`photo-placeholder ${className}`} role="img" aria-label={label}><span aria-hidden="true">{label}</span></div>;
}
