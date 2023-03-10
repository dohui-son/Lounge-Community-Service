/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "www.gravatar.com",
      "localhost",
      "ec2-43-201-116-204.ap-northeast-2.compute.amazonaws.com",
    ],
  },
};

module.exports = nextConfig;
