import { MouseEvent } from 'react';

export type ToggleAction = 
| { action: 'open'; event: MouseEvent<HTMLButtonElement> }
| { action: 'close'; event?: undefined };

export interface AppMenuProps {
  handleClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

export interface MobileMenuProps {
  children: React.ReactNode;
  open: boolean;
  onClose: () => void;
  handleClick: (e: MouseEvent<HTMLButtonElement>) => void;
} 
