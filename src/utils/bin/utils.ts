import * as bin from './index';
import packageJson from '../../../package.json';
import moment from 'moment';

export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join('\n');

  return `Usage:\n${commands}\n\n[tab]\t trigger completion.\n[ctrl+l] clear terminal.\n[ctrl+c] cancel command.`;
};

export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};

export const whoami = async (args: string[]): Promise<string> => {
  return 'guest';
};

export const theme = async (args: string[]): Promise<string> => {
  const root = window.document.documentElement;
  console.log(root.className);
  if (root.classList.contains('dark')) {
    root.classList.remove('dark');
    return 'changed to light theme';
  } else {
    root.classList.add('dark');
    return 'changed to dark theme';
  }
};

export const pwd = async (args: string[]): Promise<string> => {
  return '~/Users/guest'
};

export const week = async (args: string[]): Promise<string> => {
  const week = moment().week();
  return `V. ${week}`;
};

export const email = async (args: string[]): Promise<string> => {
  window.open('mailto:hello@mj0lken.xyz');

  return 'Opening mailto:hello@mj0lken.xyz...';
};

export const sudo = async (args?: string[]): Promise<string> => {
  window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank');

  return `Permission denied: unable to run the command '${args[0]}' as root.`;
};

export const repo = async (args?: string[]): Promise<string> => {
  window.open('https://github.com/mj0lken/home', '_blank');

  return 'Opening repository...';
};

export const thnx = async (args?: string[]): Promise<string> => {
  return ' Thanks <a class="text-light-link dark:text-dark-link underline" href="https://github.com/m4tt72/terminal" target="_blank">M4tt72</a>';
};

export const banner = (args?: string[]): string => {
  return `
  ███╗   ███╗███████╗███████╗██╗    ██╗ ██╗██████╗███╗   ██╗
  ████╗ ████║     ██║██║  ██║██║    ██║██╔╝██════╝████╗  ██║
  ██╔████╔██║     ██║██║  ██║██║    ████═╣ █████╗ ██╔███╗██║  
  ██║╚██╔╝██║██╗  ██║██║  ██║██║    ██╔██╚╗██═══╝ ██║ ╚████║
  ██║ ╚═╝ ██║███████║███████║██████╗██║ ██║██████╗██║  ╚███║
  ╚═╝     ╚═╝╚══════╝╚══════╝╚═════╝╚═╝ ╚═╝╚═════╝╚═╝   ╚══╝  v.~${packageJson.version}

Type 'help' to see list of available commands.
--
Write some exclusive tips here...
--
`;
};
