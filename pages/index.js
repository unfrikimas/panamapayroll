// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { useState } from 'react'
import Link from 'next/link';
import { Transition } from "@headlessui/react";
import Layout from '../components/layout/Layout';
import Hero from '../components/layout/Hero';
import HeroDos from '../components/layout/Hero2';
import Servicios from '../components/layout/Servicios';
import SeccionExperiencia from '../components/layout/SeccionExperiencia';
import Team from '../components/layout/Team';
import Alianzas from '../components/layout/Alianzas';
import Footer from '../components/layout/Footer';

export default function Home() {

  const [menuDropDown, setMenuDropDown] = useState(false);
  
  return (
    <>

      <HeroDos />

      <div id="servicios">
        <Servicios />
      </div>
      <div className="w-full bg-gray-100">
        <SeccionExperiencia />
      </div>
      <Team />
      <Alianzas />
      <div id="footer">
        <Footer />
      </div>
    </>
  )
}
