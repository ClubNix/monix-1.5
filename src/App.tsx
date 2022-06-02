import { Box } from "@mui/material";
import React, { useState } from "react";
import NixBar from "./Components/NixBar";
import NixTabs from "./Components/NixTabs";
import CataloguePage from "./Pages/Catalogue";
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
          Catalogue: <CataloguePage />,
          Documentation: <div>Documentation</div>,
        }}
      />
    </Box>
  );
}

export default App;
