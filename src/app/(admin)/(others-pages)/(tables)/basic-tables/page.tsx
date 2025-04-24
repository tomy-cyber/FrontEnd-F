import ComponentCard from "@/components/common/ComponentCard";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import BasicTableOne from "@/components/tables/BasicTableOne";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Pilottrace",
  description:
    "This is Pilottrace Basic Table  page for Userse",
  // other metadata
};

export default function BasicTables() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Founders" />
      <div className="space-y-6">
        <ComponentCard title=" ">
          <BasicTableOne />
        </ComponentCard>
      </div>
    </div>
  );
}
