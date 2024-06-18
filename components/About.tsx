import Wrapper from "./Wrapper";
import { aboutInfo } from "@/lib/data";

const About = () => {
  const title = aboutInfo.title;
  const description = aboutInfo.description;

  return (
    <Wrapper>
      <div>{title}</div>
      {description.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </Wrapper>
  )
}

export default About;