export type MessageType = 'info' | 'success' | 'warning' | 'danger';
export type MessagePlacement = 'top' | 'bottom' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';

export interface MessageOptions {
  message: string;
  type?: MessageType;
  duration?: number;
  placement?: MessagePlacement;
}

export interface MessageFunction {
  (options: MessageOptions | string): Promise<void>;
  info: (message: string, duration?: number) => Promise<void>;
  success: (message: string, duration?: number) => Promise<void>;
  warning: (message: string, duration?: number) => Promise<void>;
  danger: (message: string, duration?: number) => Promise<void>;
}

export interface MessageItemData {
  id: number;
  type: MessageType;
  message: string;
  duration: number;
  placement?: MessagePlacement;
  resolve: () => void;
}
