import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Guess My Number",
    description:
      "Guess my number is a simple game that allows the player to guess a number between 1 to 20. Using Javascript, HTML and CSS",
    image: "/projects/Guessinggame.png",
    tags: ["Javascript", "HTML", "CSS"],
    demoURL: "/01-Guess-My-Number/final/index.html", // ✅ Fixed path
    githubUrl: "https://github.com/Joshuadada1996/GuessingGame",
  },
  {
    id: 2,
    title: "Pig Game",
    description:
      "The Pig game is both an interesting and enjoyable project. There are two players. There are 6 dice, and each number adds points based on what was rolled. Rolling a 1 resets your points to 0 and ends your turn.",
    image: "/projects/Pig-GameWin.png",
    tags: ["Javascript", "HTML", "CSS"],
    demoURL: "/02-Pig-Game/final/index.html", // ✅ Fixed path
    githubUrl: "https://github.com/Joshuadada1996/PigGame",
  },
  {
    id: 3,
    title: "Pong Game",
    description:
      "This was a very fun project to implement as it challenged me to build a familiar game using my Javascript and CSS skills. The objective is to beat the computer by scoring 7 points.",
    image: "/projects/Pong.png",
    tags: ["Javascript", "HTML", "CSS"],
    demoURL: "/06-Pong/index.html", // ✅ Fixed path
    githubUrl: "https://github.com/Joshuadada1996/PongGame",
  },
];
// testing something
export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          These are some of my projects. Each project was carefully crafted with
          attention to detail, performance, and user experience.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoURL} // ✅ Correct key
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/Joshuadada1996?tab=repositories"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
