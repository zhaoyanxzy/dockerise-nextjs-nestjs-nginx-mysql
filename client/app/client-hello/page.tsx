"use client";

import { useEffect, useState } from "react";

export default function ClientHelloPage() {
  const [text, setText] = useState("");

  useEffect(() => {
    function helloApi() {
      return fetch("/api/");
    }
    helloApi()
      .then((res) => {
        return res.text();
      })
      .then((data) => setText(data));
  }, []);

  return <h1 className="text-3xl font-bold">{text}</h1>;
}
