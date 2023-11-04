

const Explore = () => {
  return (
    <section className="section-with-buttons">
      <h1>Become a Freelancer or</h1>
      <h1>Register a Company</h1>
      <h4>Complete the form to join</h4>
      <div className="button-container">
        <button className="button" style={{
            border: '1px solid blue',
            color: 'blue'
        }} >Freelancer</button>
        <button className="button" style={{backgroundColor: 'blue'}}> Register Company</button>
      </div>
    </section>
  );
};

export default Explore;
