import { Box, Tabs, Tab } from "@mui/material";

export type NixTabsProps = {
  tabs: string[];
  selectedTab: string | boolean;
  tabChange: (event: React.SyntheticEvent<Element, Event>, tabIndex: string) => void;
};

/** Wrapper pour un composant d'onglets */
const NixTabs = ({ tabs, selectedTab, tabChange }: NixTabsProps) => {
  return (
    <>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          aria-label="Navigation application"
          value={selectedTab}
          onChange={tabChange}
          centered
        >
          {tabs.map((tab) => (
            <Tab key={`tab-${tab}`} label={tab} value={tab} />
          ))}
        </Tabs>
      </Box>
    </>
  );
};

export default NixTabs;
