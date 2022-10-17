import { recentProjects } from '../_cmp_mock';

export default function getSingleProject(projectId: number) {
  return recentProjects.cardsData.find((proj) => proj.id === projectId);
}
