
function AuthLayout({ children }) {
  return (
    <div className="auth-layout">
      {children || <h1>Authentication Layout</h1>}
    </div>
  );
}

export default AuthLayout;
