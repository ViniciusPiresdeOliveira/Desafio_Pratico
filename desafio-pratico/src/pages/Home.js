import React, { useEffect, useState } from "react";
import { Header } from "../components/Header";
import "../styles/Header.css"
import API from "../api/API"
import { HabilidadeUsuario } from "../components/HabilidadeUsuario";
import { VoltarTopo } from "../components/VoltarTopo";

const Home = () => {

    const [userSkills, setUserSkills] = useState([]);

    useEffect(() => {
        API.get(`/api/skills/`).then(({ data }) => {
            setUserSkills(data)
        });
    })
    const arraySkills = userSkills;

    return (
        <>
            <Header />
            {arraySkills.map((t, index) => {
                return (
                    <div key={index}>
                        <HabilidadeUsuario
                            id={t.id}
                            name={t.name}
                            version={t.version}
                            description={t.description}
                            imageUrl={t.imageUrl}
                        />
                    </div>
                )
            })}
            <VoltarTopo/>

        </>
    )
}

export default Home;