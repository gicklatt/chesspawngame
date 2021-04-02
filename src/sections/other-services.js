/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container } from "theme-ui";
import SectionHeading from "components/section-heading";
import Service from "components/cards/service";
import icon4 from "assets/images/icons/reactnative.png";
import icon5 from "assets/images/icons/nodejs.png";
import icon6 from "assets/images/icons/expressjs.png";
import icon7 from "assets/images/icons/nextjs.png";
import icon8 from "assets/images/icons/mongodb.png";
import icon9 from "assets/images/icons/redis.png";
import icon10 from "assets/images/icons/figma.png";

const data = [
  {
    id: 1,
    icon: icon4,
  },
  {
    id: 2,
    icon: icon5,
  },
  {
    id: 3,
    icon: icon6,
  },
  {
    id: 4,
    icon: icon7,
  },
  {
    id: 5,
    icon: icon8,
  },
  {
    id: 6,
    icon: icon9,
  },
  {
    id: 7,
    icon: icon10,
  },
];

const OtherServices = () => {
  return (
    <Box as="section" sx={styles.section} id="technologies">
      <Container>
        <SectionHeading
          sx={styles.heading}
          title="Technologies I used before"
          description=" I'm not very good at all. But I know about them. I improved myself especially on react native and node/express. I'm trying to keep up with new technologies."
        />
        <Box sx={styles.contentWrapper}>
          {data?.map((item) => (
            <Service key={item.id} item={item} />
          ))}
        </Box>
      </Container>
    </Box>
  );
};
export default OtherServices;

const styles = {
  section: {
    backgroundColor: "#F9FAFC",
    pt: [9, 9, 9, 11],
    pb: [9, 9, 9, 12, 12, 14],
  },
  heading: {
    mb: [6, null, null, 8, 9, null, 13],
    p: {
      maxWidth: 500,
      margin: "10px auto 0",
    },
  },
  contentWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
};
