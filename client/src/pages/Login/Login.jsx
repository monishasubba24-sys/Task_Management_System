
import PageTitle from '../../components/ui/PageTitle';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';

function Login() {
  return (
    <div className="page">
      <Card title="Login" description="Welcome back to TaskFlow.">
        <PageTitle title="Sign In" />

        <form onSubmit={(event) => {
          event.preventDefault();
          alert('Login form submitted');
        }}>
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="Enter your email" required />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="Enter your password" required />
          </div>

          <Button text="Login" type="submit" />
        </form>
      </Card>
    </div>
  );
}

export default Login;
