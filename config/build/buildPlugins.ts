import HtmlWebpackPlugin from 'html-webpack-plugin';
import {
    DefinePlugin, HotModuleReplacementPlugin, ProgressPlugin, WebpackPluginInstance,
} from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

import { BuildOptions } from './types/config';
// import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";

export function buildPlugins({ paths, isDev }: BuildOptions): WebpackPluginInstance[] {
    return [
        new HtmlWebpackPlugin({
            template: paths.html,
        }),
        new ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        }),
        new DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev),
        }),

        // isDev && new ReactRefreshWebpackPlugin(),
        new HotModuleReplacementPlugin(),
        new BundleAnalyzerPlugin({
            openAnalyzer: false,
        }),
    ];
}
