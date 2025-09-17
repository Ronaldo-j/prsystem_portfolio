"use client";
import React from "react";
import { Button } from "../components/ui/moving-border";
import GooeyNav from "@/components/GooeyNav";
import LightRays from "@/components/LightRays";
import TextType from "@/components/TextType";
import { GlareCard } from "../components/ui/glare-card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import {
  HomeOutlined,
  UserOutlined,
  BranchesOutlined,
  MailOutlined,
  EyeOutlined,
  GlobalOutlined,
} from "@ant-design/icons";

const items = [
  { label: "Home", href: "#", icon: <HomeOutlined /> },
  { label: "Sobre", href: "#", icon: <UserOutlined /> },
  { label: "Projetos", href: "#", icon: <BranchesOutlined /> },
  { label: "Contatos", href: "#", icon: <MailOutlined /> },
];

export default function Home() {
  return (
    <div>
      <div className="sticky-nav flex items-center justify-end gap-4 p-4">
        <GooeyNav
          items={items}
          particleCount={15}
          particleDistances={[90, 10]}
          particleR={100}
          initialActiveIndex={0}
          animationTime={600}
          timeVariance={300}
          colors={[1, 2, 3, 1, 2, 3, 1, 4]}
        />
      </div>
      <div className="relative w-full min-h-screen">
        <div className="absolute inset-0 h-[750px]">
          <LightRays
            raysOrigin="top-center"
            raysColor="#00ffff"
            raysSpeed={1.5}
            lightSpread={0.8}
            rayLength={1.2}
            followMouse={true}
            mouseInfluence={0.1}
            noiseAmount={0.1}
            distortion={0.05}
            className="custom-rays"
          />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center h-[750px] text-white text-center">
          <h1 className="text-3xl sm:text-4xl font-bold">
            Venha ser
            <TextType
              className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-purple-400 via-blue-500 to-green-400 bg-clip-text text-transparent"
              text={[" Futuro", " PrSystem!"]}
              typingSpeed={75}
              pauseDuration={1500}
              showCursor={true}
              cursorCharacter="|"
              cursorStyle={{ color: "white" }}
            />
          </h1>
          <h1 className="text-lg sm:text-xl mt-2">
            Construindo sua Presença Digital
          </h1>
          <div className="flex items-center justify-center mt-2">
            <h1 className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-purple-400 via-blue-500 to-green-400 bg-clip-text text-transparent p-2">
              Pixel
            </h1>
            <h1 className="text-lg sm:text-xl">a</h1>
            <h1 className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-purple-400 via-blue-500 to-green-400 bg-clip-text text-transparent p-2">
              Pixel
            </h1>
          </div>
          <div className="p-5 mt-4">
            <Button
              borderRadius="2.5rem"
              className="bg-white dark:bg-slate-900 text-black dark:text-white dark:border-slate-800 px-4 py-2 text-sm cursor-pointer"
            >
              Ler Mais
            </Button>
          </div>
        </div>

        <div className="bg-gradient-to-b from-oklch(38.6% 0.063 188.416) to-black w-full py-16 sm:py-32 px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-6xl mx-auto">
            <div className="flex-1 flex items-center justify-center w-full md:w-auto">
              <GlareCard className="w-full h-auto md:w-[400px] md:h-[300px] flex items-center justify-center">
                <img
                  className="h-full w-full absolute inset-0 object-cover"
                  src="https://i.ibb.co/MykNds6J/Whats-App-Image-2025-09-04-at-09-01-38.jpg"
                  alt="PrSystem Team"
                />
              </GlareCard>
            </div>
            <div className="flex-1 flex flex-col justify-center mt-8 md:mt-0 text-left">
              <h2 className="text-white font-extrabold text-2xl sm:text-3xl lg:text-4xl mb-4">
                Por que escolher a{" "}
                <span className="text-indigo-600">PrSystem</span>?
              </h2>
              <p className="text-lg sm:text-xl text-white max-w-3xl mx-auto md:mx-0">
                Somos o parceiro estratégico para impulsionar seu negócio no
                digital. Vamos além de sites e dashboards: criamos{" "}
                <strong>soluções logísticas inteligentes</strong> e{" "}
                <strong>presença digital impactante</strong> que simplificam
                operações, convertem clientes e aceleram seu crescimento.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-black py-12 px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white font-extrabold text-gray-900 sm:text-4xl mb-4">
            Nossos Projeto
          </h2>
          <div>
            <CardContainer className="inter-var">
              <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-neutral-600 dark:text-white"
                >
                  Ágil veiculos
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                >
                  Uma landing page de venda de carros que oferece uma
                  experiência de usuário envolvente e moderna.
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4">
                  <img
                    src="https://i.ibb.co/5x4ChV6w/image.jpg"
                    height="1000"
                    width="1000"
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="thumbnail"
                  />
                </CardItem>
                <div className="flex justify-between items-center mt-20">
                  <CardItem
                    translateZ={20}
                    as="a"
                    href="https://agil-app-five.vercel.app/"
                    target="__blank"
                    className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                  >
                    <GlobalOutlined /> Demo
                  </CardItem>
                  <CardItem
                    translateZ={20}
                    as="button"
                    className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                  >
                    <EyeOutlined /> Ver Mais
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          </div>
        </div>

        <div className="bg-black py-12 px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white font-extrabold text-gray-900 sm:text-4xl mb-4">
            Nosso Contato
          </h2>
        </div>

        <footer className="bg-black py-12 px-4 sm:px-6 lg:px-8 text-center text-white">
          © 2025 PrSystem. All rights reserved.{" "}
        </footer>
      </div>
    </div>
  );
}
