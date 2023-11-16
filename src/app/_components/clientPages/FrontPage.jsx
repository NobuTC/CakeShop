"use client";
import { Button, Image } from "@nextui-org/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

import "./frontpage.css";

export default function FrontPage() {
  const router = useRouter();
  return (
    <main className="mx-auto">
      <div className="mx-auto">
        <div className="mx-auto container bg-cover bg-center frontpage flex">
          <div className="relative flex-1 md:flex-3 p-2">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
              <h1 className="text-4xl mb-4">Juhlat Tulossa?</h1>
              <h2 className="text-2xl mb-4">Tilaa kakku ja herkuttele!</h2>
              <Button
                className="row mt-6 front-page-btn"
                onClick={() => {
                  router.push("/category");
                }}
                color="default"
              >
                Katso kakku ehtoja
              </Button>
            </div>
          </div>

          <div className="hidden md:flex md:flex-1 p-6 text-center flex items-center justify-center">
            <div className="relative">
              <Image
                src="https://i.imgur.com/0iwqIfJ.jpg"
                alt="cake pic"
                radius="none"
              />
              <div className="absolute inset-0 bg-orange-500 rounded-none image-shadow-box"></div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
