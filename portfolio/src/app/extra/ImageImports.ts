function importAll<T>(requireContext: __WebpackModuleApi.RequireContext) {
  const importedPictures: { default: T }[] = requireContext
    .keys()
    .filter((key) => key.match(/\.\//))
    .map(requireContext) as { default: T }[];

  return importedPictures.map((element) => element.default);
}

const tectocDesktop = importAll<HTMLImageElement>(
  require.context(
    "@/app/pages/tectoc/tectoc-images",
    false,
    /\.(png|jpe?g|svg)$/
  )
);

const tectocMobile = importAll<HTMLImageElement>(
  require.context(
    "@/app/pages/tectoc/tectoc-images/mobile-images",
    false,
    /\.(png|jpe?g|svg)$/
  )
);

const capstoneImages = importAll<HTMLImageElement>(
    require.context(
      "@/app/pages/capstone/capstone-images",
      false,
      /\.(png|jpe?g|svg)$/
    )
  );

export { tectocDesktop, tectocMobile, capstoneImages}