import { PropsWithChildren } from "react";

type MainRoute = {
  path: "/" | "/:id" | "/examples";
  Component: (children: PropsWithChildren) => JSX.Element;
};

type AuthRoute = {
  path: "/";
  Component: (children: PropsWithChildren) => JSX.Element;
};

export type MainLayoutRoutes = {
  Layout: (children: PropsWithChildren) => JSX.Element;
  routes: MainRoute[];
};

export type AuthLayoutRoutes = {
  Layout: (children: PropsWithChildren) => JSX.Element;
  routes: AuthRoute[];
};
