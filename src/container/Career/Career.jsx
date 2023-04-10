import React from "react";
import { Subtitle } from "../../components";
import images from "../../constants/images";
import "./Career.css";

const Career = () => (
  <div id="career" className="app__career" style={{ backgroundColor: "#f1f1e8" }}>
    <Subtitle title="who is this guy?" />
    <div className="app__career-container">
      <div className="app__career-container_img">
        <img src={images.portafolio} alt="i'm juan" />
      </div>
      <div className="app__career-container-info">
        <p className="app__career-container-info_para">
          <span>Hello world</span>, my name is Juan and I am a graphic designer, product
          engineer and web/app dev. My goal is to create stuff that people find
          appealing but also easy to use. My interests include: solving programming puzzles, playing
          video-games and cooking. From my <span>Graphic Design</span>{" "}
          background, I&apos;ve developed a sense and feel for what looks good.
          I am also capable of speaking a wide range of visual languages. Lately
          I&apos;ve been a lot into Brutalist Design/Art/Architecture. <br />
          <br />
          My <span>Product Design</span> education gave me the ability to think
          about the things I create as &quot;projects&quot; and manage them properly by
          implementing hierarchy and file/data structures.
        </p>
        <p className="app__career-container-info_para">
           Finally, coming to
          Spain, I found out about <span>Web Development</span> as a career
          path. And it all makes so much sense to me now. Web Development
          carries over all that I&apos;ve learned throughout my personal and
          professional life and I just enjoy it greatly because of it. It
          requires me to be organized and structured, involves basic design concepts such as layout and composition, and present it all
          as the pleasing, engaging and, overall, nice and fair interfaces with
          which we interact on a daily basis. It feels magical and I&apos;am so
          grateful for having the opportunity to learn and work on something I truly
          enjoy. All in all, I&apos;m just a 90&apos;s kid who grew up eating
          cereal, watching TMNT and playing Contra on an old CRT Tv.
        </p>
      </div>
    </div>
  </div>
);

export default Career;
