import config from '../../../config.json';
export const instagram = async (args: string[]): Promise<string> => {
  window.open(`https://www.instagram.com/${config.social.instagram}/`, '_blank');

  return 'Opening instagram in new tab...';
};

export const github = async (args: string[]): Promise<string> => {
  window.open(`https://github.com/${config.social.github}/`, '_blank');

  return 'Opening github in new tab...';
};

export const linkedin = async (args: string[]): Promise<string> => {
  window.open(`https://www.linkedin.com/in/${config.social.linkedin}/`, '_blank');

  return 'Opening linkedin in new tab...';
};
