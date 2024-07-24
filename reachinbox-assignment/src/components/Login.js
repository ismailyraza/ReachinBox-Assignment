import React from 'react';

const Login = () => {
  const handleGoogleLogin = async () => {
    const redirectUrl = 'http://localhost:3000/onebox'; // Replace with your actual frontend URL
    window.location.href = `https://hiring.reachinbox.xyz/api/v1/auth/google-login?redirect_to=${encodeURIComponent(redirectUrl)}`;
  };

  return (
    <div className="login-container">
      <h1>Login / Add Mail</h1>
      <button onClick={handleGoogleLogin}>Login with Google</button>
    </div>
  );
};

export default Login;
