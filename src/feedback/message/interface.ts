interface MessageOptions {
  message: string;
  type?: 'info' | 'success' | 'warning' | 'danger';
  duration?: number;
}

export interface MessageFunction {
  (options: MessageOptions | string): void;
  info: (message: string, duration?: number) => void;
  success: (message: string, duration?: number) => void;
  warning: (message: string, duration?: number) => void;
  danger: (message: string, duration?: number) => void;
}
