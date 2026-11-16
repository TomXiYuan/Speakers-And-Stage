import themes from '../content/themes.json';
export default function ThemeChip({ theme }) {
  const color = themes.find(item => item.name === theme)?.color || 'cyan';
  return <span className={`theme-chip theme-${color}`}>{theme}</span>;
}
