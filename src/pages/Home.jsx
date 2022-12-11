import React from "react";
import { Main, Header, ContentImg, Footer, Section, Service, Content } from "../components";
import Follow from "../components/Follow/Follow";

const Home = () => {
  const [content, setContent] = React.useState([]);
  const [servers, setServers] = React.useState([]);
  React.useEffect(() => {
      fetch('http://localhost:3000/db.json').then((resp) => resp.json()).then((json) => {
          setContent(json.content);
          setServers(json.servers);
      })
  }, [])


  return (
    <div className="wrapper">
      <Header />
      <Main />
      <Section title="Template Pages" subtitle="Our Core Layouts" />
      <Content content={content}/>
      <ContentImg />
      <Section title="Our Core Features" subtitle="Our Services" />
      <Service servers={servers}/>
      <Follow/>
      <Footer />
    </div>
  );
};

export default Home;
