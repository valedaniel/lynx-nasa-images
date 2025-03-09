import { root } from '@lynx-js/react';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { App } from './App.js';

const queryClient = new QueryClient();

root.render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>,
);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
}
