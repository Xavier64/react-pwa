import React, { useState, useEffect } from "react";
import "./App.css";
import Auth from "./components/Auth";
import { Button, Layout } from "antd";
import { db } from "./firebase";
import { collection, getDocs } from "firebase/firestore";

const { Header, Content, Footer } = Layout;

function App() {
  const [title, setTitle] = useState("Titre de ma page");
  const [dog, setDog] = useState([]);

  const dogCollectionRef = collection(db, "dogs");
  const getDogs = async () => {
    try {
      const data = await getDocs(dogCollectionRef);
      const docs = data.docs.map((doc) => doc.data());
      console.log(data, "data");
      console.log(docs, "docs");
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getDogs();
  }, []);

  useEffect(() => {
    document.title = title;
  }, [title]);

  console.log(title, "title");

  return (
    <Layout>
      <textarea autoFocus />
      <Header />
      <Content style={{ paddingTop: "40px" }}>
        <Auth />
        <Button onClick={() => setTitle(`${Math.random()}-${title}`)}>
          Modifier le titre
        </Button>
      </Content>
      <Footer />
    </Layout>
  );
}

export default App;
