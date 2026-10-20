"use client";

import { useRef, useState } from "react";
import * as THREE from "three";
import { Canvas, events as createPointerEvents, useFrame } from "@react-three/fiber";
import type { RootStore } from "@react-three/fiber";
import { Environment, Lightformer } from "@react-three/drei";
import { HeroPhysics } from "@/features/three/hero-physics/HeroPhysics";
import { KeycapFloor } from "@/features/three/world/KeycapFloor";
import { EnterKey } from "@/features/three/objects/EnterKey";
import { FeatureTiles } from "@/features/three/objects/FeatureTiles";
import { Loupe } from "@/features/three/objects/Loupe";
import { BoardingPass } from "@/features/three/objects/BoardingPass";
import { CAMERA_FOV, CONTENT_DEPTH, anchorElement } from "./anchor";
import { stickyProgress } from "@/lib/runtime";

/** How far the camera flies forward, through the hero keycaps, on the first scroll. */
const HERO_FLIGHT = 18;

const PRESS_EVENTS = [
  "onClick",
  "onDoubleClick",
  "onContextMenu",
  "onPointerDown",
  "onPointerUp",
] as const;
const INTERACTIVE = "a, button, input, textarea, select, label, summary, dialog, [role='button']";

/**
 * The canvas listens on <body>, so presses on DOM controls would also hit the
 * 3D object behind them. Those presses belong to the DOM only.
 */
function domAwareEvents(store: RootStore) {
  const manager = createPointerEvents(store);
  const handlers = manager.handlers;
  if (!handlers) return manager;
  for (const name of PRESS_EVENTS) {
    const handle = handlers[name];
    handlers[name] = (event: Event) => {
      if (event.target instanceof Element && event.target.closest(INTERACTIVE)) return;
      handle(event);
    };
  }
  return manager;
}

/**
 * One persistent WebGL canvas behind the whole page. The DOM stays the source
 * of content; 3D objects are anchored to empty "slots" in the HTML.
 */
export default function Stage() {
  return (
    <Canvas
      style={{ position: "fixed", inset: 0, zIndex: 10 }}
      eventSource={typeof document !== "undefined" ? document.body : undefined}
      eventPrefix="client"
      events={domAwareEvents}
      dpr={[1, 1.5]}
      camera={{ fov: CAMERA_FOV, position: [0, 0, CONTENT_DEPTH], near: 0.1, far: 80 }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      onCreated={({ gl }) => {
        gl.localClippingEnabled = true;
        gl.toneMapping = THREE.ACESFilmicToneMapping;
        gl.toneMappingExposure = 1.05;
      }}
    >
      <fog attach="fog" args={["#08090a", 15, 30]} />
      <Lights />
      <Scene />
    </Canvas>
  );
}

function Lights() {
  return (
    <>
      <ambientLight intensity={0.25} />
      <directionalLight position={[5, 6, 8]} intensity={1.6} />
      <pointLight position={[-6, -2, -4]} intensity={30} color="#7c5cff" distance={20} />
      {/* Procedural studio environment: no HDRI download needed. */}
      <Environment resolution={128} frames={1}>
        <Lightformer form="rect" intensity={3} position={[0, 4, 4]} scale={[10, 2, 1]} />
        <Lightformer
          form="rect"
          intensity={1.5}
          position={[-6, 0, 2]}
          rotation-y={Math.PI / 2}
          scale={[8, 3, 1]}
        />
        <Lightformer
          form="rect"
          intensity={1.2}
          color="#a48bff"
          position={[6, -1, 2]}
          rotation-y={-Math.PI / 2}
          scale={[8, 3, 1]}
        />
        <Lightformer form="circle" intensity={2} position={[0, 0, -8]} scale={4} />
      </Environment>
    </>
  );
}

function Scene() {
  const rig = useRef<THREE.Group>(null);
  const [heroActive, setHeroActive] = useState(true);

  useFrame(({ camera, pointer }) => {
    const hero = anchorElement("hero");
    const p = hero ? stickyProgress(hero.getBoundingClientRect(), window.innerHeight) : 1;
    const eased = p * p * (3 - 2 * p);
    camera.position.z = CONTENT_DEPTH - eased * HERO_FLIGHT;
    camera.position.x = THREE.MathUtils.lerp(camera.position.x, pointer.x * 0.12, 0.05);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, pointer.y * 0.08, 0.05);
    // Everything anchored to the page travels with the camera.
    if (rig.current) {
      rig.current.position.set(
        camera.position.x,
        camera.position.y,
        camera.position.z - CONTENT_DEPTH,
      );
    }
    const active = p < 0.95;
    if (active !== heroActive) setHeroActive(active);
  });

  return (
    <>
      <HeroPhysics active={heroActive} />
      <group ref={rig}>
        <KeycapFloor />
        <FeatureTiles anchorId="obj-features" />
        <Loupe anchorId="obj-la-loupe-de-correction" />
        <BoardingPass anchorId="obj-plusgrade" />
        <EnterKey anchorId="obj-enter" />
      </group>
    </>
  );
}
