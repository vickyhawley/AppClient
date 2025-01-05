const mutableRoutes = {
  Private: {
    Dashboard: "/",
  },
};

type Immutable<T> = T extends string
  ? T
  : T extends Function
  ? T
  : { readonly [key in keyof T]: Immutable<T[key]> };

export const Routes: Immutable<typeof mutableRoutes> =
  Object.freeze(mutableRoutes);
