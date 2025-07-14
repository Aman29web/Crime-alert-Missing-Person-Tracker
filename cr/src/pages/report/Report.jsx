import ReportHero from "./ReportHero";
import ReportTypeSelector from "./ReportTypeSelector";
import ReportFormSection from "./ReportFormSection";
import { useState } from "react";

const ReportPage = () => {
  const [selectedType, setSelectedType] = useState("");

  return (
    <>
      <ReportHero />
      <ReportTypeSelector selected={selectedType} setSelected={setSelectedType} />
      <ReportFormSection selectedType={selectedType} />
    </>
  );
};

export default ReportPage;
