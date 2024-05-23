import webpack from "webpack";

export const buildLoaders = (): webpack.RuleSetRule[] => {
  const typesciptLoader = [
    {
      test: /\.tsx?$/,
      use: "ts-loader",
      exclude: /node_modules/,
    },
  ];

  return typesciptLoader;
};
