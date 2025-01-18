import { ImageResponse } from "next/og";
import { PROJECT_TITLE, PROJECT_DESCRIPTION } from "~/lib/constants";

export const alt = "LinkRipple - Farcaster Frame";
export const size = {
  width: 600,
  height: 400,
};

export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div tw="h-full w-full flex flex-col justify-center items-center relative bg-gradient-to-b from-purple-900 to-indigo-900">
        <div tw="flex flex-col items-center justify-center bg-white/10 p-12 rounded-3xl shadow-2xl">
          <h1 tw="text-6xl font-bold text-white mb-4">{PROJECT_TITLE}</h1>
          <h3 tw="text-2xl text-purple-200 text-center max-w-[80%]">
            {PROJECT_DESCRIPTION}
          </h3>
          <div tw="mt-8 flex items-center">
            <span tw="text-purple-300 mr-2">Powered by</span>
            <span tw="text-white font-bold">Farcaster Frames</span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
