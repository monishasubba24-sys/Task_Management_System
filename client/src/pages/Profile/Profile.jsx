
import PageTitle from '../../components/ui/PageTitle';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';

function Profile() {
  return (
    <div className="page">
      <PageTitle
        title="My Profile"
        subtitle="View your account information."
      />

      <Card
        title="User Information"
        description="Your TaskFlow profile details."
      >
        <p>Name: TaskFlow User</p>
        <p>Email: user@example.com</p>

        <Button
          text="Edit Profile"
          onClick={() => alert('Edit Profile')}
        />
      </Card>
    </div>
  );
}

export default Profile;
