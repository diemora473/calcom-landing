/**
 * Material Symbols wrapper that flattens the verbose inline `<span>` pattern.
 * Use `<Icon name="wine_bar" size={28} filled />` anywhere.
 */
export function Icon({ name, size = 20, filled = false, className = '' }) {
  const sizeStyle = typeof size === 'number' ? `${size}px` : size;
  const inlineStyle = {
    'font-size': sizeStyle,
    ...(filled ? { 'font-variation-settings': "'FILL' 1" } : {})
  };
  return (
    <span className={`material-symbols-outlined ${className}`} style={inlineStyle}>
      {name}
    </span>
  );
}
