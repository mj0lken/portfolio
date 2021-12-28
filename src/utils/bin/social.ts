import config from '../../../config.json'
export const instagram = async (args: string[]): Promise<string> => {
  window.open(`https://www.instagram.com/${config.social.instagram}/`, '_blank')

  return 'Opened instagram in new tab.'
}

export const github = async (args: string[]): Promise<string> => {
  window.open(`https://github.com/${config.social.github}/`, '_blank')

  return 'Opened Github in new tab.'
}

export const linkedin = async (args: string[]): Promise<string> => {
  window.open(`https://www.linkedin.com/in/${config.social.linkedin}/`, '_blank')

  return 'Opened LinkedIn in new tab.'
}

export const twitter = async (args: string[]): Promise<string> => {
  const includesDm = args.indexOf('-dm') + 1;
  if (includesDm) {
    const message = args[includesDm] ? args[includesDm] : 'Woops,%20just%20slid%20in%20here%20from%20your%20website%20and%20wanted%20to%20say%20hi!'
    window.open(`https://twitter.com/messages/compose?recipient_id=${config.social.twitterId}&text=${message}`, '_blank')
    return 'Opened Twitter DMs in new tab.'
  }
  window.open(`https://www.linkedin.com/in/${config.social.twitter}/`, '_blank')
  return 'Opened Twitter in new tab.'
}
