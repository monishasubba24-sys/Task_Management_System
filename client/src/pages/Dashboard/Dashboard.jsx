
import PageTitle from '../../components/ui/PageTitle';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';

function Dashboard() {
  return (
    <div className="page">
      <PageTitle
        title="Dashboard"
        subtitle="Overview of your tasks and projects."
      />

      <div className="ui-card-grid">
        <Card title="Total Projects" description="Your project overview">
          <h2>5</h2>
          <Button text="View Projects" onClick={() => alert('Projects')} />
        </Card>

        <Card title="Total Tasks" description="Your task overview">
          <h2>12</h2>
          <Button text="View Tasks" onClick={() => alert('Tasks')} />
        </Card>
      </div>
    </div>
  );
}

export default Dashboard;
