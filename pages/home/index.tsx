import u from "./../../styles/utils.module.scss";

const Home = (): JSX.Element => {
  return (
    <div>
      <h1 className={u["Home-code-1"]}>Hi, my name is</h1>
      <h2 className={u["Home-code-1"]}>Michael Ungar.</h2>
      <h3 className={u["Home-code-1"]}>Developer and Designer from Austria.</h3>
      <p >I'm a software engineer and creator currently working as a freelancer focused on creating flawless code and maginificient designs.</p>
    </div>
  );
};

export default Home;

// import utilStyles from "./../../styles/utils.module.scss";
// import { NavbarHeightContext } from "../../components/layouts/layout";
// import { useContext, useEffect, useState } from "react";
// import useWindowSize, { Size } from "../../hooks/useWindowSize";
// import Image from "next/image";
// import { animated as a, useSpring, config } from "react-spring";

// const Home = (): JSX.Element => {
//   const { NavbarHeight } = useContext(NavbarHeightContext);
//   const size: Size = useWindowSize();
//   const [loaded, setLoaded] = useState(false);

//   useEffect(() => {
//     setLoaded(true);
//   }, []);

//   const headingSpring1 = useSpring({
//     from: { opacity: 0, marginLeft:  "-400px"},
//     to: {opacity: 1, marginLeft:"0px"},
//     config: {tension: 120, friction: 12},
//   });
//   const headingSpring2 = useSpring({
//     opacity: loaded ? 1 : 0,
//     marginLeft: loaded ? "0px" : "-400px",
//     config: {tension: 110, friction: 12},
//   });
//   const headingSpring3 = useSpring({
//     opacity: loaded ? 1 : 0,
//     marginLeft: loaded ? "0px" : "-400px",
//     config: {tension: 100, friction: 12},
//   });
//   const headingSpring4 = useSpring({
//     opacity: loaded ? 1 : 0,
//     marginLeft: loaded ? "0px" : "-400px",
//     config: {tension: 90, friction: 12},
//   });

//   const fadeInSpring = useSpring({
//     opacity: loaded ? 1 : 0,
//     config: { duration: 1250, ...config.slow },
//   });

//   const scrollSuggestorSpring = useSpring({
//     opacity: loaded ? 1 : 0,
//     marginBottom: loaded ? "0px" : "300px",
//     config: { delay: 1250 },
//   });

//   const calcHeightSection1 = () => {
//     if (size.height < parseInt(utilStyles.hSmall, 10)) {
//       return parseInt(utilStyles.hSmall, 10) - 2 * NavbarHeight;
//     } else {
//       return size.height - 2 * NavbarHeight;
//     }
//   };
//   return (
//     <>
//     <div> hello world</div>
//       {/* <a.div style={scrollSuggestorSpring} className={styles.scrollSuggestor}>
//         <span>find out more about us</span>
//         <div className={styles.scrollIcon}>
//           <ScrollIcon />
//         </div>
//       </a.div>
//       <main>
//         <section
//           className={styles.section1}
//           style={{ height: calcHeightSection1(), marginBottom: NavbarHeight }}
//         >
//           <div className={styles.introtext}>
//             <h2 className={utilStyles.heading_home_1}>
//               <a.div style={headingSpring1}>Delicious food?</a.div>
//               <a.div style={headingSpring2}>All currencies? </a.div>
//               <a.div style={headingSpring3}>Good prices? </a.div>
//               <a.div style={headingSpring4}>Octagon!</a.div>
//             </h2>
//             <a.p style={fadeInSpring} className={utilStyles.text_home_1}>
//               Whether Meat Lovers or Vegans, our meals make everyone happy!
//             </a.p>
//             <a.div className={styles.clickSection} style={fadeInSpring}>
//               <Button width={200} dark={false}>
//                 Reserve now
//               </Button>
//               <a.div style={fadeInSpring} className={styles.arrow}>
//                 <Arrow />
//               </a.div>
//             </a.div>
//           </div>

//           <a.div style={fadeInSpring} className={styles.image1}>
//             <Image
//               width={700}
//               height={500}
//               src={Image1}
//               alt="Octagon-meal-image"
//             />
//           </a.div>
//         </section>
//         <HomeDetail
//           flipped
//           teaser="WE OFFER ..."
//           header="Amazing Food!"
//           text="Enjoy the best food in town while being in a relaxing environment."
//           Image={Image2}
//         />
//         <HomeDetail
//           teaser="YOU CAN ..."
//           header="Pay with whatever you want"
//           text="Octagon follows the digitalistation trend and even supports all crypt-currencies!"
//           Image={Image3}
//         />
//         <HomeDetail
//           flipped
//           teaser="WE HAVE ..."
//           header="5 Star rating"
//           text="Everyone likes our food! Make it even better by getting discounts by sharing your visit on social-media. "
//           Image={Image4}
//         />
//       </main> */}
//     </>
//   );
// };

// export default Home;
