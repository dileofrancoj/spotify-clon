/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    rules: {
      "react/prop-types": 0,
      "react/react-in-jsx-scope": "off",
    },
  },
};

module.exports = nextConfig;
