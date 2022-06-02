import { Box, Tabs, Tab } from "@mui/material";

export type NixTabsProps = {
  tabs: { [tabId: string]: React.ReactNode };
  selectedTab: string;
  tabChange: (event: any, tabIndex: any) => void;
};

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
          {Object.keys(tabs).map((key, index) => (
            <Tab key={`tab-${index}`} label={key} value={key} />
          ))}
        </Tabs>
      </Box>
      {tabs[selectedTab]}
    </>
  );
};

export default NixTabs;
