import { buildLoaders, buildPlugins, buildResolvers, buildDevServer } from "./";

import { BuildOptions } from "./types/config";
import webpack from "webpack";

export const buildWebpackConfig = (
  options: BuildOptions
): webpack.Configuration => {
  const { paths, mode, isDev } = options;
  return {
    mode,
    entry: paths.entry,
    module: {
      rules: buildLoaders(options),
    },
    resolve: buildResolvers(),
    output: {
      path: paths.build,
      filename: "[name].[contenthash].js",
      clean: true,
    },
    plugins: buildPlugins(options),
    devtool: isDev ? "inline-source-map" : undefined,
    devServer: isDev ? buildDevServer(options) : undefined,
  };
};
