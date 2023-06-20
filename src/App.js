import React, { useState, useEffect } from "react";
import "./App.css";
import Auth from "./components/Auth";
import { Layout } from "antd";
import { db } from "./firebase";
import { collection, getDocs, addDoc, doc } from "firebase/firestore";
import { DogsTable } from "./table/index";
import { DogForm } from "./form/index";

const { Header, Content, Footer } = Layout;

function App() {
  const [dogs, setDogs] = useState([]);
  const [dog, setDog] = useState([]);

  const dogCollectionRef = collection(db, "dogs");


  const getDogs = async () => {
    try {
      const data = await getDocs(dogCollectionRef);
      const docs = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));

      setDogs(docs);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getDogs();
  }, []);

  const onAddDog = async (values) => {
    try {
      await addDoc(dogCollectionRef, { ...values });
    } catch (e) {
      console.error(e);
    }
  };

  const onUpdatedog = async (newValues, id) => {
    try {
      const dogToUpdate = doc(db, "dogs", id);
      // await updateDog(dogToUpdate, { ...newValues });
      await getDogs();
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Layout>
      <textarea autoFocus />
      <Header />
      <Content style={{ paddingTop: "40px" }}>
        <Auth />
        <DogForm onAddDog={onAddDog} dog={dog} onUpdatedog={onUpdatedog} />
        <DogsTable dataSource={dogs} />
      </Content>
      <Footer />
    </Layout>
  );
}

export default App;
