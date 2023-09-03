import { ThemeProvider } from '@lobehub/ui';
import 'antd/dist/reset.css';
import { PropsWithChildren, memo } from 'react';

const Layout = memo<PropsWithChildren>(({ children }) => {
  return <ThemeProvider themeMode={'auto'}>{children}</ThemeProvider>;
});

export default Layout;
