const POSTER_SIZES = {
  MOBILE: 'w300',
  TAB: 'w780',
  DESKTOP: 'w1280',
  ORIGNAL: 'original',
};
export const getImageURL = (baseUrl, path) => {
  return `${baseUrl}${POSTER_SIZES.MOBILE}${path}`;
};
