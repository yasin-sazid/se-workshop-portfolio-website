function Hero({ profile }) {
  const title = profile?.title || "CS Student | Web Developer | Problem Solver";
  const name = profile?.name || "Yasin";
  return (
    <section className="hero">
      <h1>Hello, I am {name}</h1>
      <p>{title}</p>
    </section>
  );
}

export default Hero;
