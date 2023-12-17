import LogoIcon from '../assets/logo.gif'
export const MyCaminoLogo = ({
  color,
  size,
}: {
  color?: string | undefined;
  size: number;
  }) => (
  <img src={LogoIcon} width={size} height={size}></img>
  
);
