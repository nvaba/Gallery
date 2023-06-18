import LinkedIn from "/linkedin.svg";
import Github from "/github.svg";
import Right from "/right.svg";

function Footer() {
  return (
    <footer>
      <p>Let's connect!</p>
      <div className="mt-2 sm:flex sm:justify-between">
        <nav>
          <a target="_blank" href="mailto:nateaba@gmail.com">
            nateaba@gmail.com
          </a>
          <div className="flex gap-1">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/nate-abaria-891b34243/"
            >
              <img className="h-7" src={LinkedIn} alt="LinkedIn" />
            </a>
            <a target="_blank" href="https://github.com/nvaba">
              <img className="h-7" src={Github} alt="Github" />
            </a>
          </div>
        </nav>
        <nav className="mt-5 sm:mt-0">
          <a target="_blank" href="https://nateabaria.ca">
            <span className="flex gap-1">
              Portfolio <img src={Right} alt="Right Arrow" />
            </span>
          </a>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
