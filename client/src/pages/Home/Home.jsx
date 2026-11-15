
import PageTitle from '../../components/ui/PageTitle';
import Button from '../../components/ui/Button';
import Card from '../../components/ui/Card';

function Home() {
  return (
    <div className="page">
      <PageTitle
        title="Welcome to TaskFlow"
        subtitle="Manage your tasks and projects efficiently."
      />

      <div className="ui-card-grid">
        <Card
          title="Manage Projects"
          description="Create and organize your projects easily."
        >
          <Button
            text="View Projects"
            onClick={() => window.location.href = '/dashboard'}
          />
        </Card>

        <Card
          title="Manage Tasks"
          description="Keep track of your daily activities."
        >
          <Button
            text="View Dashboard"
            onClick={() => window.location.href = '/dashboard'}
          />
        </Card>
      </div>
    </div>
  );
}

export default Home;
