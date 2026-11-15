
import { useState } from 'react';

import PageTitle from '../../components/ui/PageTitle';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';

function Dashboard() {
  const [count, setCount] = useState(0);
  const [taskName, setTaskName] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="page">
      <PageTitle
        title="Dashboard"
        subtitle="Manage your tasks and projects."
      />

      <div className="ui-card-grid">

        {/* Counter */}
        <Card
          title="Task Counter"
          description="Click to increase the counter."
        >
          <h2>Count: {count}</h2>

          <Button
            text="Increase Count"
            onClick={() => setCount(count + 1)}
          />

          <Button
            text="Reset"
            variant="secondary"
            onClick={() => setCount(0)}
          />
        </Card>

        {/* User Input */}
        <Card
          title="Task Input"
          description="Enter your task name."
        >
          <input
            type="text"
            placeholder="Enter your task"
            value={taskName}
            onChange={(event) => setTaskName(event.target.value)}
          />

          <p>You entered: {taskName || 'No task entered yet'}</p>
        </Card>

        {/* Conditional Rendering */}
        <Card
          title="Login Status"
          description="Change your login status."
        >
          {isLoggedIn ? (
            <p>Welcome! You are logged in.</p>
          ) : (
            <p>Please login to continue.</p>
          )}

          <Button
            text={isLoggedIn ? 'Logout' : 'Login'}
            onClick={() => setIsLoggedIn(!isLoggedIn)}
          />
        </Card>

      </div>
    </div>
  );
}

export default Dashboard;
