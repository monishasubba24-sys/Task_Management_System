
import PageTitle from '../../components/ui/PageTitle';
import Welcome from '../../components/ui/Welcome';

function Home() {
  return (
    <div className="page">
      <PageTitle
        title="Welcome to TaskFlow"
        subtitle="Manage your tasks and projects efficiently."
      />

      <Welcome
        userName="TaskFlow User"
        projectName="Task Management System"
        organization="TaskFlow"
      />
    </div>
  );
}

export default Home;
