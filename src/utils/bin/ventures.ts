const projects = async (args: string[]): Promise<string> => {
  const ventures = [
    {
      name: 'Galiot',
      role: 'Co-Founder / CTO',
      url: 'www.galiot.io'
    },
  ]

  return '\n' + ventures
    .map(
      (repo) =>
        `${repo.name} | ${repo.role} | <a class="text-light-link dark:text-dark-link underline" href="${repo.url}" target="_blank">${repo.url}</a>`,
    )
    .join('\n');
};

export default projects;
