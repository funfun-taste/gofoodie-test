import {createVanillaExtractPlugin} from "@vanilla-extract/next-plugin";
import analyzer from '@next/bundle-analyzer';

const withVanillaExtract = createVanillaExtractPlugin();

const withBundleAnalyzer = analyzer({
  enabled: process.env.ANALYZE === 'true',
})

/** @type {import('next').NextConfig} */
const nextConfig = {

};

export default withBundleAnalyzer(withVanillaExtract(nextConfig));
