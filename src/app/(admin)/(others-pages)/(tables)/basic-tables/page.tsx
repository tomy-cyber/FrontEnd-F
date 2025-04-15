import ComponentCard from "@/components/common/ComponentCard";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import BasicTableOne from "@/components/tables/BasicTableOne";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "CryptoVault",
  description:
    "This is CryptoVault Basic Table  page for Userse",
  // other metadata
};

export default function BasicTables() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Founders" />
      <div className="space-y-6">
        <ComponentCard title="Role">
          <BasicTableOne />
        </ComponentCard>
      </div>
    </div>
  );
}
