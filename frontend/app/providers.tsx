"use client";

// import { ChakraProvider } from "@chakra-ui/react";
// import { ReactNode } from "react";

// interface ProvidersProps {
//   children: ReactNode;
// }

// export function Providers({ children }: ProvidersProps) {
//   return <ChakraProvider>{children}</ChakraProvider>;
// }


// app/providers.tsx
// 'use client'

import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider>
      <ChakraProvider>{children}</ChakraProvider>
    </CacheProvider>
  )
}

// import { ChakraProvider, extendTheme } from "@chakra-ui/react";

// const theme = extendTheme({
//   colors: {
//     brand: {
//       500: "#1a365d",
//     },
//   },
// });

// export function Providers({ children }: { children:React.ReactNode }) {
//   return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
// }


// "use client";

// import { ChakraProvider, ColorModeScript, extendTheme } from "@chakra-ui/react";
// import { ReactNode } from "react";

// const theme = extendTheme({
//   initialColorMode: "light",
//   useSystemColorMode: false,
// });

// export function Providers({ children }: { children: ReactNode }) {
//   return (
//     <ChakraProvider theme={theme}>
//       {/* Ensures server and client have same color mode */}
//       <ColorModeScript initialColorMode={theme.config?.initialColorMode} />
//       {children}
//     </ChakraProvider>
//   );
// }

