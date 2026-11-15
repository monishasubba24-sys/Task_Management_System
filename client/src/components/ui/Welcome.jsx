
function Welcome({ userName, projectName, organization }) {
  return (
    <div className="ui-card">
      <h2>Welcome, {userName}!</h2>
      <p>Project: {projectName}</p>
      <p>Organization: {organization}</p>
    </div>
  );
}

export default Welcome;
