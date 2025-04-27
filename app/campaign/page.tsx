"use client"

import React from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import CampaignForm from "@/components/campaign-form"

export default function CampaignPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 bg-gray-50">
        <CampaignForm />
      </main>
      <Footer />
    </div>
  )
} 