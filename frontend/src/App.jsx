import React from "react";
import { Show, SignInButton, SignUpButton, UserButton } from "@clerk/react";

const App = () => {
  return (
    <>
    <h1>Kinetic</h1>
      <header>
        <Show when="signed-out">
          <SignInButton mode="modal" />
          <SignUpButton mode="modal" />
        </Show>
        <Show when="signed-in">
          <UserButton />
        </Show>
      </header>
    </>
  );
};

export default App;
