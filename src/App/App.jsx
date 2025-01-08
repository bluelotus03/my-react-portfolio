import { Appbar } from "../components/Appbar";
import { Heading } from "../components/Heading";
import { ProjectCard } from "../components/ProjectCard";
import { ExperienceAccordion } from "../components/ExperienceAccordion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

// import { library } from '@fortawesome/fontawesome-svg-core';
// import { fab } from '@fortawesome/free-brands-svg-icons';
// import { faCheckSquare, faFacebook } from '@fortawesome/free-solid-svg-icons';
import "./App.css";
const socialIconSize = "lg";
export function App() {
  return (
    <>
      <Appbar />
      <main id="Home">
        <section id="landing">
          <h1 className="headline">
            👋 Hey there, I'm&nbsp;
            <a
              href="https://www.linkedin.com/in/ashharmon/"
              rel="noreferrer"
              target="_blank"
            >
              <span>Ash</span>
            </a>
            !
          </h1>
          <img
            alt="Software engineer illustration"
            src="/assets/main-image.svg"
            width="90%"
          />
          <article className="about-me">
            <Heading id="About">About Me</Heading>
            <p className="white-p">
              My name is Ashley Harmon (Ash), and I'm a passionate designer,
              developer, and problem-solver who loves to learn.
              <br />
              <br />
              I graduated from UNCC with a B.S. in Computer Science and a M.S.
              in Information Technology. I was the Web & Media Chair for Girls
              Who Code at UNC Charlotte, where I created and ran our very first
              hackathon, Axe Hacks, and designed our logo and media materials. I
              also enjoyed creating technical workshops for us all to learn
              together.
              <br />
              <br />
              Check out these workshops and some of my projects below, or
              connect with me on my socials to see what I'm currently up to!
              (Full bio on LinkedIn)
            </p>
            <br />
            <div className="social">
              <h3 className="connect-text">Connect with Me</h3>
              <ul className="social-container">
                <li className="social-items">
                  <a
                    href="https://www.linkedin.com/in/ashharmon/"
                    className="social_link"
                  >
                    <i className="social-icon">
                      <FontAwesomeIcon icon={["fab", "linkedin"]} />
                    </i>
                  </a>
                </li>
                <li className="social-items">
                  <a
                    href="https://www.youtube.com/channel/UCrBn4DZnHLNc-hULSA1H36w"
                    className="social_link"
                  >
                    <i className="social-icon">
                      <FontAwesomeIcon icon={["fab", "youtube"]} />
                    </i>
                  </a>
                </li>
                <li className="social-items">
                  <a
                    href="https://twitter.com/ash_hrz00"
                    className="social_link"
                  >
                    <i className="social-icon">
                      <FontAwesomeIcon icon={["fab", "twitter"]} />
                    </i>
                  </a>
                </li>
                <li className="social-items">
                  <a
                    href="https://www.instagram.com/bluelotus03tech/"
                    className="social_link"
                  >
                    <i className="social-icon">
                      <FontAwesomeIcon icon={["fab", "instagram"]} />
                    </i>
                  </a>
                </li>
                <li className="social-items">
                  <a
                    href="https://github.com/bluelotus03"
                    className="social_link"
                  >
                    <i className="social-icon">
                      <FontAwesomeIcon icon={["fab", "github"]} />
                    </i>
                  </a>
                </li>
              </ul>
              <br />
              <h3 className="connect-text">
                My work for GWC ~ Jan'21 to May'22
              </h3>
              <ul className="social-container">
                <li className="social-items">
                  <a
                    href="https://gwc-uncc.github.io/myportfolio/"
                    className="social_link"
                  >
                    <i className="social-icon">
                      <FontAwesomeIcon icon={["fas", "globe"]} />
                    </i>
                  </a>
                </li>
                <li className="social-items">
                  <a
                    href="https://www.linkedin.com/company/girls-who-code-at-unc-charlotte/"
                    className="social_link"
                  >
                    <i className="social-icon">
                      <FontAwesomeIcon icon={["fab", "linkedin"]} />
                    </i>
                  </a>
                </li>
                <li className="social-items">
                  <a
                    href="https://www.instagram.com/girlswhocode_uncc/"
                    className="social_link"
                  >
                    <i className="social-icon">
                      <FontAwesomeIcon icon={["fab", "instagram"]} />
                    </i>
                  </a>
                </li>
                <li className="social-items">
                  <a
                    href="https://www.facebook.com/girlswhocode.uncc"
                    className="social_link"
                  >
                    <i className="social-icon">
                      <FontAwesomeIcon icon={["fab", "facebook"]} />
                    </i>
                  </a>
                </li>
                <li className="social-items">
                  <a
                    href="https://twitter.com/gwc_uncc"
                    className="social_link"
                  >
                    <i className="social-icon">
                      <FontAwesomeIcon icon={["fab", "twitter"]} />
                    </i>
                  </a>
                </li>
                <li className="social-items">
                  <a href="https://github.com/GWC-UNCC" className="social_link">
                    <i className="social-icon">
                      <FontAwesomeIcon icon={["fab", "github"]} />
                    </i>
                  </a>
                </li>
              </ul>
              <h3 className="connect-text">
                My work for Axe Hacks ~ Jan'22 to May'22
              </h3>
              <ul className="social-container">
                <li className="social-items">
                  <a
                    href="https://gwc-uncc.github.io/axe-hacks-2022/"
                    className="social_link"
                  >
                    <i className="social-icon">
                      <FontAwesomeIcon icon={["fas", "globe"]} />
                    </i>
                  </a>
                </li>
                <li className="social-items">
                  <a
                    href="https://www.linkedin.com/company/axe-hacks/"
                    className="social_link"
                  >
                    <i className="social-icon">
                      <FontAwesomeIcon icon={["fab", "linkedin"]} />
                    </i>
                  </a>
                </li>
                <li className="social-items">
                  <a
                    href="https://www.instagram.com/axe.hacks/"
                    className="social_link"
                  >
                    <i className="social-icon">
                      <FontAwesomeIcon icon={["fab", "instagram"]} />
                    </i>
                  </a>
                </li>
                <li className="social-items">
                  <a
                    href="https://twitter.com/axe_hacks"
                    className="social_link"
                  >
                    <i className="social-icon">
                      <FontAwesomeIcon icon={["fab", "twitter"]} />
                    </i>
                  </a>
                </li>
                <li className="social-items">
                  <a
                    href="https://github.com/bluelotus03/axe-hacks-2022"
                    className="social_link"
                  >
                    <i className="social-icon">
                      <FontAwesomeIcon icon={["fab", "github"]} />
                    </i>
                  </a>
                </li>
              </ul>
            </div>
          </article>
        </section>
        <section className="projects-section">
          <div className="blue-box" aria-hidden="true" />
          <Heading id="Websites">
            <span className="black-heading">Websites</span>
          </Heading>
          <div className="project-cards">
            <ProjectCard
              title="NEW GWC Website"
              description="Led our team in developing a new site using a Hugo template."
              link="https://gwc-uncc.github.io/Girls-Who-Code-at-UNCC/"
              imgSrc="/assets/new-gwc-site.png"
            />
            <ProjectCard
              title="GWC Website"
              description="Temporary single-page website, while our Web Team built a full website."
              link="https://youtu.be/Lu9n9t3DmOM"
              imgSrc="/assets/gwc-new-site.png"
            />
            <ProjectCard
              title="GWC Website Prototype"
              description="A prototype created with Wix and Premiere Pro for a GWC website idea."
              link="https://youtu.be/6yToLcz0ufo"
              imgSrc="/assets/GWC-prototype.png"
            />
            <ProjectCard
              title="Climate Refugee Stories"
              description="A freelance website project for a professor at UNCC."
              link="https://climaterefugeestories.com"
              imgSrc="/assets/crs-site.png"
            />
            <ProjectCard
              title="Axe Hacks"
              description="A website created for Axe Hacks, GWC & ACM's first haclkathon."
              link="https://gwc-uncc.github.io/axe-hacks-2022/"
              imgSrc="/assets/axe-hacks.png"
            />
            <ProjectCard
              title="HomeSlice"
              description="A hackathon project where Airbnb meets college housing."
              link="https://devpost.com/software/homesplice"
              imgSrc="/assets/homeslice.png"
            />
            <ProjectCard
              title="Recycle & Reuse"
              description="A web app created for my Software Design & Implementation class."
              link="https://youtu.be/12izD9hEYHA"
              imgSrc="/assets/r-and-r.png"
            />
            <ProjectCard
              title="Coffee Lovers"
              description="A fun website for coffee lovers created for the MLH INIT Hackathon."
              link="https://www.youtube.com/watch?v=cJorpvFMQ0g"
              imgSrc="/assets/coffee-lovers.png"
            />
          </div>
        </section>
        <section className="projects-section">
          <div className="white-p" aria-hidden="true" />
          <Heading id="Games">
            <span>Games</span>
          </Heading>
          <div className="project-cards">
            <ProjectCard
              title="Save the Holiday!"
              description="A holiday-themed game built with Kaboom JS for MLH Hackathons."
              link="https://www.youtube.com/watch?v=kErJsKQj3OM"
              imgSrc="/assets/save-the-holiday.png"
            />
            <ProjectCard
              title="Space Ninja"
              description="A fun game created for my Intro to Game Design & Development class."
              link="https://youtu.be/bVSvxj92T6U"
              imgSrc="/assets/spaceninja.png"
            />
            <ProjectCard
              title="The Curse of Waldron"
              description="A fun game created for my Intro to Game Design & Development class."
              link="https://youtu.be/eO4vW0FHvbI"
              imgSrc="/assets/curseofW.png"
            />
            <ProjectCard
              title="Space Invaders"
              description="A fun game created for my Build a Game Workshop with GWC."
              link="https://replit.com/@Ash00321/Build-a-Game-Workshop"
              imgSrc="/assets/space-invaders.png"
            />
            <ProjectCard
              title="The Cursed Forest"
              description="A fun game created for the Hack-O-Lantern Hackathon."
              link="https://devpost.com/software/hack-o-lantern-game"
              imgSrc="/assets/cursed-forest.png"
            />
          </div>
        </section>
        <section className="projects-section">
          <div className="blue-box" aria-hidden="true" />
          <Heading id="Misc">
            <span className="black-heading">Miscellaneous</span>
          </Heading>
          <div className="project-cards">
            <ProjectCard
              title="MLH INIT Projects"
              description="A demo of projects completed at this week-long hackathon."
              link="https://youtu.be/5fSmiRu8R_o"
              imgSrc="/assets/mlh-init.png"
            />
            <ProjectCard
              title="Workshop Materials"
              description="All technical workshop recordings and materials created for GWC."
              link="https://docs.google.com/document/d/1fUOufYgRbcGCmlwe0PDt1L7SaFI-rOlK-KjRlsTU5cs/edit?usp=sharing"
              imgSrc="/assets/gwc-workshops.png"
            />
            <ProjectCard
              title="Selenium Automation"
              description="A web automation framework with Selenium, Java, and Cucumber."
              link="https://github.com/bluelotus03/Udemy-Automation-Project-1"
              imgSrc="/assets/selenium-framework.png"
            />
            <ProjectCard
              title="Playwright Automation"
              description="[WIP] A Playwright, TS, Cucumber web automation framework."
              link="https://github.com/bluelotus03/Playwright-Cucumber-TS-Automation-Framework"
              imgSrc="/assets/playwright-framework.png"
            />
            <ProjectCard
              title="Hacker Guide"
              description="A guide for participants of GWC and ACMW's first hackathon."
              link="https://www.canva.com/design/DAE6kQKmVrU/Kpky5Uc5Cjb4AjrzkjBmpg/view?utm_content=DAE6kQKmVrU&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink#1"
              imgSrc="/assets/hacker-guide.png"
            />
            <ProjectCard
              title="Web Team Guide"
              description="A guide for GWC's Web Team, creating the new website."
              link="https://docs.google.com/document/d/1sxgaEG-Hd6xzkNaAmkmxFyy-j7IfFRTG25rmfYCoOFg/edit?usp=sharing"
              imgSrc="/assets/web-guide.png"
            />
          </div>
        </section>
        <section>
          <Heading id="Workshops">GWC Workshops</Heading>
          <p className="white-p">
            Below are brief descriptions of the workshops I have created and
            taught for Girls Who Code at UNC Charlotte. All recordings and
            guides created for these workshops can be found&nbsp;
            <a
              href="https://docs.google.com/document/d/1fUOufYgRbcGCmlwe0PDt1L7SaFI-rOlK-KjRlsTU5cs"
              rel="noreferrer"
              target="_blank"
              className="no-line-link"
            >
              <strong>here</strong>
            </a>{" "}
            and are listed in the same order. Also check out my&nbsp;
            <a
              href="https://drive.google.com/file/d/1gOFFOHQWLQels2c5wtD1bt283hHhj6Z1"
              rel="noreferrer"
              target="_blank"
              className="no-line-link"
            >
              <strong>research paper</strong>
            </a>{" "}
            on my semester of teaching workshops for more on each of these!
          </p>
          <br />
          <div className="experience-accordions">
            <ExperienceAccordion title="GitHub Workshop: Setup & The Basics">
              This is a workshop where we walked through a step-by-step guide
              learning how to install Git, VS Code, and Hugo, and then work with
              Git using VS Code. In this workshop, you can learn to do things
              like forking and cloning a repository, committing, and pushing.
            </ExperienceAccordion>
            <ExperienceAccordion title="GitHub Workshop: Basics & Next Level">
              This is a workshop where we walked through a step-by-step guide
              learning how to work with Git using VS Code. In this workshop, you
              can learn to do things like forking and cloning a repository,
              pushing and pulling, creating branches, merging branches, and more
              information on what these are and how they're used.
            </ExperienceAccordion>
            <ExperienceAccordion title="Let's Play with Hugo!">
              This is a workshop where we walked through the folders in our
              website repo and then practiced making some changes to the
              template site. In this workshop, you can learn about Hugo, the
              various folders and file types used in our repo, and test out
              making changes with your own fork.
            </ExperienceAccordion>
            <ExperienceAccordion title="Figma Workshop: The Basics">
              This is a workshop from Girls Who Code at UNC Charlotte where we
              walked through learning the basics of Figma and creating a simple
              website prototype. We explore topics such as text, shapes, layers,
              using plugins, creating effects, and more!
            </ExperienceAccordion>
            <ExperienceAccordion title="Create an Online Portfolio">
              This is a workshop where we learned to create an online portfolio
              from a template by simply replacing some of the HTML and CSS. We
              use Replit for an easy browser editor, but there are instructions
              for using VS Code and GitHub listed in the guide as well. The
              guide itself has a ton of resources for learning HTML and CSS, how
              to work with different editors, publishing your site, and more!
            </ExperienceAccordion>
            <ExperienceAccordion title="Command Line Games">
              This workshop was created to help students get past the fear of
              the concept or commands and try to make learning fun by completing
              levels using commands they learned on the previous level.
              OverTheWire’s Bandit Levels were used for this workshop, and I set
              up an event on CTFd, using a project my husband set up on Digital
              Ocean, to work like a Capture the Flag competition (CTF).
            </ExperienceAccordion>
            <ExperienceAccordion title="Build a Game">
              This workshop was created to teach participants how to use Kaboom
              JS, a JavaScript library, to build a basic version of Space
              Invaders. It was meant to give students some experience working
              with a JavaScript library and seeing the result of that work in
              real-time.
            </ExperienceAccordion>
            <ExperienceAccordion title="Figma Workshop: Working in Teams">
              This is a workshop from Girls Who Code at UNC Charlotte where we
              walked through learning the basics of working with a team in Figma
              and using a team style guide to create a simple website prototype.
            </ExperienceAccordion>
          </div>
        </section>
      </main>
    </>
  );
}
