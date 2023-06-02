import Feed from "@components/Feed";

const Home = () => (
  <section className="w-full flex-center flex-col">
    <h1 className="head_text text-center">
      <br className="max-md:hidden" />
      <span className="orange_gradient text-center">
        {" "}
        Andalusien kennen - Andalusien lieben
      </span>
    </h1>
    <p className="desc text-center">Verwirkliche Deine Wohnträume</p>

    <Feed />
  </section>
);

export default Home;
