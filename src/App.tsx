import { Box } from "@mui/material";
import React, { useState } from "react";
import "./App.css";
import NixBar from "./Components/NixBar";
import NixTabs from "./Components/NixTabs";
import MembersPage from "./Pages/Members";

function App() {
  const [currentTab, setCurrentTab] = useState("Membres");

  return (
    <Box sx={{ flexGrow: 1 }}>
      <NixBar />
      <NixTabs
        selectedTab={currentTab}
        tabChange={(evt, val) => setCurrentTab(val)}
        tabs={{
          Membres: <MembersPage />,
          Catalogue: <div>Catalogue</div>,
          Documentation: <div>Documentation</div>,
        }}
      />
    </Box>
  );
}

export default App;
