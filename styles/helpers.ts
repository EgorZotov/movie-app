export const parsePxToNumber = (px: string): number => {
  if (typeof px === 'string' && px.endsWith('px')) {
    return parseFloat(px);
  } else {
    throw Error('Wrong function input for parsePxToNumber');
  }
};
