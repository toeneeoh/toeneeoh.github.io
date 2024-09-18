const importAll = (requireContext) => {
  let images = {};
  requireContext.keys().forEach((item) => {
    images[item.replace('./', '')] = requireContext(item);
  });
  return images;
};

const images = importAll(require.context('./', false, /\.svg$/));

export default images;
