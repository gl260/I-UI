export type MessageType = 'info' | 'success' | 'warning' | 'danger';
export type MessagePlacement = 'top' | 'bottom' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';

export interface MessageOptions {
  message: string;
  type?: MessageType;
  duration?: number;
  placement?: MessagePlacement;
}

export interface MessageFunction {
  (options: MessageOptions | string): void;
  info: (message: string, duration?: number) => void;
  success: (message: string, duration?: number) => void;
  warning: (message: string, duration?: number) => void;
  danger: (message: string, duration?: number) => void;
}

export interface MessageItemData {
  id: number;
  type: MessageType;
  message: string;
  duration: number;
  placement?: MessagePlacement;
}
