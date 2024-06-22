import { Title } from "@solidjs/meta";
import { css } from "solid-styled";
import Counter from "~/components/Counter";

export default function Home() {
  css`
    p {
      font-weight: 700;
    }
  `;
  return (
    <main>
      <Title>Hello World</Title>
      <h1>Hello world!</h1>
      <Counter />
      <p>
        Visit{" "}
        <a href="https://start.solidjs.com" target="_blank">
          start.solidjs.com
        </a>{" "}
        to learn how to build SolidStart apps.
      </p>
    </main>
  );
}
