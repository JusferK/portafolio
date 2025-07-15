import WhatIDo from "./what-i-do/what-do.jsx";
import Projects from "./projects/projects.jsx";
import { Dialog } from "primereact/dialog";
import React from "../../assets/svg/react.svg";
import { useEffect, useState } from "react";

const Main = ({ props, sectionsRef }) => {

    const { handler } = props;

    useEffect(() => console.log(sectionsRef),[sectionsRef])

    return (
        <>
            <Projects props={{ handler: (projects, action) => handler(projects, action), sectionsRef }} />
            <WhatIDo />
        </>
    );

};

export default Main;