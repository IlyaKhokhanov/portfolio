import { ProjectIdPage } from '@/containers';

const Project = ({ params }: { params: { id: string } }) => {
  return <ProjectIdPage id={params.id} />;
};

export default Project;
