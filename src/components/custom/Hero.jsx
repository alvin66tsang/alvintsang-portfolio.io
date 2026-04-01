import profile_pic from "../../assets/profile_pic.png"

const Hero = () => {
  return (
    <section className="hero relative flex lg:flex-nowrap flex-wrap w-full min-h-[calc(100vh-10rem)] p-4">
      <div className="md:px-64 px-4 bg-transparent my-auto w-full">
        <h1 className="scroll-m-20 text-left text-6xl font-extrabold tracking-tight text-balance">
          Hi, I'm Alvin Tsang
        </h1>
        <h2 className="scroll-m-20 py-2 text-4xl font-semibold tracking-tight">
          Full Stack Developer
        </h2>
        <p className="text-2xl text-muted-foreground text-wrap">
          A creative Full Stack Developer with 3+ years of experience in
          building high-performance, scalable, and responsive web solutions.
        </p>
      </div>
      <div className="relative flex bg-transparent w-full justify-center items-center">
        <img src={profile_pic} className="my-auto aspect-video object-cover" />
      </div>
    </section>
  );
};

export default Hero;
