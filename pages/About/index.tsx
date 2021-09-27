import React from "react";
import Head from "next/head";
import f from "./../../styles/fonts.module.scss";
import c from "./../../styles/components.module.scss";
import l from "./about.module.scss";
import Image from "next/image";
import setup from "./../../public/images/setup.jpg";

// import aboutStyles from "./about.module.scss";
// import utilStyles from "./../../styles/utils.module.scss";

function About() {
  return (
    <>
      <Head>
        <title>ungarmichael - portfolio</title>
      </Head>

      <section className={c["Section"]}>
        <h2 className={l["Heading"]}>
          <span className={f["Section-Code-1"]}>01.</span>
          <span className={f["Section-Heading-1"]}>About</span>
        </h2>
        <div className={l["Content-Wrapper"]}>
          <p className={`${l["Text-Container"]} ${f["About-Text-1"]}`}>
            Hello!, I am Michael and I really enjoy creating things. My interest
            in tech in general started with lego mindstorms and
            circuit-soldering kits back when I was about 8 years old. After
            watching countless youtube-tutorials my parents allowed me to build
            my own computer after proving them I was capable of doing so.
            Eventually I got into coding when trying to create minecraft mods
            and servers. In my first year at the HTL Grieskirchen for Computer
            Science I was able to learn about all of the possibilites with code.
            <br />
            <br />
            After completing many youtube tutorials and online courses I
            continuesly found myself at creating web applications with ReactJS.
            I also learned a lot about project management because I wanted to
            have my creations as structured and organised as possible even
            though it sometimes cost me more time than actually coding it.
            <br />
            <br />
            Right now I design, manage and develop projects for various clients
            and as already meantioned I am attending highschool. Eventually I
            would like to work in the tech-industry creating awesome projects
            with awesome people!
            <br />
            <br />
            Besides that I also love to interact with coding-communities and
            implement my own ideas.
            <br />
            <br />
            Here are a few technologies I am currently working with:
          </p>
          <div className={l["Image-Wrapper"]}>
            <div className={l["Image-Filter"]}></div>
            <div className={l["Image-Mask"]}>
              <div className={l["Image-Container"]}>
                <Image
                  className={l["Image"]}
                  layout="responsive"
                  height={500}
                  width={900}
                  src={setup}
                  alt="Picture of the author"
                />
              </div>
            </div>
            <div className={l["Image-Frame"]}>miksl image</div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
