import { getProjects } from '../../api';

const projects = async (args: string[]): Promise<string> => {
  const projects = await getProjects();

  return projects
    .filter((repo) => !repo.fork)
    .map(
      (repo) =>
        `${repo.name} | <a class="text-light-link dark:text-dark-link underline" href="${repo.html_url}" target="_blank">${repo.html_url}</a> \n <em> <q> ${repo.description} </q> </em> \n`,
    )
    .join('\n');
};

export default projects;
