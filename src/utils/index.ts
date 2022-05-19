export const cloudinaryImage = (cloudinaryPath: string, width = 1000) => {
  return `https://res.cloudinary.com/john-pels/image/upload/c_scale,q_100,w_${width}/${cloudinaryPath}`;
};
