import { ProjectIdPage } from '@/pages';

const Project = ({ params }: { params: { id: string } }) => {
  return <ProjectIdPage id={params.id} />;
};

export default Project;
