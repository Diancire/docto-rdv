import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import GeneralSettings from "./GeneralSettings"


export default function Settings() {
    const tabs = [
        {
            label: "Général",
            value: "general",
            component: <GeneralSettings/>
        },
        {
            label: "Sécurité",
            value: "security",
            component: <></>
        }
    ]
  return (
      <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 bg-muted/40 p-4 md:gap-8 md:p-10">
        <div className="mx-auto grid w-full max-w-6xl gap-2">
          <h1 className="text-3xl font-semibold">Settings</h1>
        </div>
        <div className="mx-auto grid w-full max-w-6xl items-start gap-6">
          <div className="">
            <Tabs defaultValue="general" className="w-full">
                <TabsList>
                    {tabs.map((tab) => (
                        <TabsTrigger key={tab.value} value={tab.value}>{tab.label}</TabsTrigger>
                    ))}
                </TabsList>
                {tabs.map((tab, index) => (
                  <TabsContent key={index} value={tab.value}>
                    {tab.component}
                  </TabsContent>
                ))}
            </Tabs>
          </div>
        </div>
      </main>
  )
}
