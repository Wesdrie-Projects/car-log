import {
  type RouteConfig,
  route,
  index,
  layout,
  prefix,
} from '@react-router/dev/routes';

export default [
  layout('./auth/layout.tsx', [route('login', './auth/index.tsx')]),
] satisfies RouteConfig;
