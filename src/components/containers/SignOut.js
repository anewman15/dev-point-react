import endSession from '../../sandbox/endSession';

function SignOut() {
  const handleSubmit = e => {
    e.preventDefault();
    endSession();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <button type="submit">Sign Out</button>
      </form>

    </div>
  );
}

export default SignOut;
