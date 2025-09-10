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
} from "@/components/ui/select"


const items = [
  { label: "Home", href: "#" },
  { label: "Sobre", href: "#" },
  { label: "Projetos", href: "#" },
  { label: "Contatos", href: "#" }
];

export default function Home() {
  return (
    <div>
      <div
        className="sticky-nav flex items-center justify-end gap-4 p-4"
      >
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
        <Select>
          <SelectTrigger
            className="w-32 h-16 border-0 bg-transparent shadow-none rounded-lg
               hover:bg-blue-50/70 hover:text-black text-white transition-colors duration-300
               focus-visible:ring-2 focus-visible:ring-blue-400/50"
          >
            <SelectValue placeholder="Português" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="en">English</SelectItem>
            <SelectItem value="sp">Spanish</SelectItem>
            <SelectItem value="pt">Português</SelectItem>
          </SelectContent>
        </Select>

      </div>
      <div style={{ width: '100%', height: '750px', position: 'relative' }}>
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
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-white text-4xl font-bold text-center">
            <h1>
              Venha ser
              <TextType
                className="text-4xl font-extrabold bg-gradient-to-r from-purple-400 via-blue-500 to-green-400 bg-clip-text text-transparent"
                text={[" Futuro", " PrSystem!"]}
                typingSpeed={75}
                pauseDuration={1500}
                showCursor={true}
                cursorCharacter="|"
                cursorStyle={{ color: "white" }} // Adiciona cor branca ao cursor
              />
            </h1>
            <h1>
              Construindo sua Presença Digital
            </h1>
            <div className="items-center justify-center flex">
              <h1 className="text-4xl font-extrabold bg-gradient-to-r from-purple-400 via-blue-500 to-green-400 bg-clip-text text-transparent p-2">Pixel</h1>
              <h1>a</h1>
              <h1 className="text-4xl font-extrabold bg-gradient-to-r from-purple-400 via-blue-500 to-green-400 bg-clip-text text-transparent p-2">Pixel</h1>
            </div>
            <div className="p-5">
              <Button
                borderRadius="2.5rem"
                className="bg-white dark:bg-slate-900 text-black dark:text-white dark:border-slate-800 px-4 py-2 text-sm cursor-pointer"
              >
                Ler Mais
              </Button>

            </div>
          </div>
        </div>

        <div className="bg-gradient-to-b from-oklch(38.6% 0.063 188.416) to-black h-screen py-32 px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex flex-row items-center justify-center gap-8 max-w-6xl mx-auto">
            <div className="flex-1 flex items-center justify-center">
              <GlareCard className="flex items-center justify-center">
                <img
                  className="h-full w-full absolute inset-0 object-cover"
                  src="https://images.unsplash.com/photo-1512618831669-521d4b375f5d?q=80&w=3388&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
              </GlareCard>
            </div>
            <div className="flex-1 flex flex-col justify-center mt-8">
              <h2 className="text-white font-extrabold text-gray-900 sm:text-4xl mb-4">
                Por que escolher a <span className="text-indigo-600">PrSystem</span>?
              </h2>
              <p className="text-xl text-white x-w-3xl mx-auto">
                Somos o parceiro estratégico para impulsionar seu negócio no digital. Vamos além de sites e dashboards: criamos <strong>soluções logísticas inteligentes</strong> e <strong>presença digital impactante</strong> que simplificam operações, convertem clientes e aceleram seu crescimento.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-black py-12 px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white font-extrabold text-gray-900 sm:text-4xl mb-4">
            Nosso Projeto
          </h2>
        </div>

        <div className="bg-black py-12 px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white font-extrabold text-gray-900 sm:text-4xl mb-4">
            Nosso Contato
          </h2>
        </div>

        <footer className="bg-black py-12 px-4 sm:px-6 lg:px-8 text-center text-white"> foter aqui </footer>
      </div>
    </div>
  );
}
