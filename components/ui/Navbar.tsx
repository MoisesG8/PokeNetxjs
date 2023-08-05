import { useTheme, Text, Spacer } from "@nextui-org/react";
import Image from "next/image";
import React from "react";

export const Navbar = () => {
  const { theme } = useTheme();
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        padding: "0x 20px",
        backgroundColor: theme?.colors.gray50.value,
      }}
    >
      <Image
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/493.png"
        alt="Picture of the Arceus"
        width={50}
        height={50}
      />

      <Text color="white" h2>
        P
      </Text>
      <Text color="white" h3>
        ókemon
      </Text>

      <Spacer
        css={{
          flex: 1,
        }}
      />
      <Text color="white"> Favoritos </Text>
    </div>
  );
};
