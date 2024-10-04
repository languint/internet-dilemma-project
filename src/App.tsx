import {ThemeProvider} from "@/components/theme-provider.tsx";

import './index.css'
import {ResizablePanel, ResizablePanelGroup} from "@/components/ui/resizable.tsx";
import {Separator} from "@/components/ui/separator";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card.tsx";
import {Button} from "@/components/ui/button.tsx";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion.tsx";
import {ScrollArea, ScrollBar} from "@/components/ui/scroll-area.tsx";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs.tsx";

export function App() {

    return (
        <ThemeProvider defaultTheme={"dark"}>
            <div className="App flex flex-row scroll-smooth">
                <ResizablePanelGroup direction={"horizontal"}>
                    <ResizablePanel defaultSize={80} className={"w-[calc(100%-20rem)] h-full p-5"}>
                        <ScrollArea>
                            <ScrollBar/>
                            <h1 className={"text-4xl font-semibold tracking-tight"}>
                                Net Neutrality
                            </h1>
                            <Separator className={"mt-5 mb-5"}/>
                            <h1 className={"text-3xl font-semibold tracking-tight mb-2"}>
                                Core Question
                            </h1>
                            <h2 className={"font-medium tracking-normal"}>When and how
                                should internet service providers be
                                allowed to treat some kinds of
                                internet traffic different from others?</h2>
                            <span className={"m-5"}></span>
                            <h3 className={"text-3xl tracking-tight mb-5 font-semibold"}>What is Net
                                Neutrality?</h3>
                            <Card className={"w-full"}>
                                <CardHeader>
                                    <CardTitle>Definition</CardTitle>
                                    <CardDescription>Net Neutrality - The principle that internet service providers
                                        should
                                        enable access to all content and applications regardless of the
                                        source</CardDescription>
                                </CardHeader>
                                <CardContent className={"flex flex-row items-center justify-center w-full"}>

                                    <img
                                        src={"https://www.citizensutilityboard.org/wp-content/uploads/2021/08/36167014995_c6f07af38d_k.jpg"}
                                        alt={"net-neutrality-image"} className={"max-w-[30rem] "}/>

                                </CardContent>
                                <CardFooter className={"flex flex-col gap-2"}>
                                    <CardDescription>
                                        For more information, I recommend watching this video.
                                    </CardDescription>
                                    <Button variant={"secondary"}
                                            onClick={() => window.location.replace("https://www.usatoday.com/videos/tech/2024/04/25/what-is-net-neutrality-explained/73451181007/")}>Launch
                                        video</Button>
                                </CardFooter>
                            </Card>
                            <h3 className={"text-3xl tracking-tight mb-5 font-semibold mt-5"}>Who is impacted?</h3>
                            <div className={"mt-5 flex flex-row gap-5"}>
                                <Card className={"flex-grow"}>
                                    <CardHeader>
                                        <CardTitle>Internet Service Providers (ISPs)</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <Accordion type={"single"} collapsible className={"w-full"}>
                                            <AccordionItem value={"1"}>
                                                <AccordionTrigger>What are their interests?</AccordionTrigger>
                                                <AccordionContent>
                                                    According to <a
                                                    href={"https://en.wikipedia.org/wiki/Net_neutrality"}
                                                    className={"text-blue-400"}>Wikipedia</a>,
                                                    ISPs, such as Comcast, Verizon, and AT&T are trying to maximize
                                                    their profits. <br/>
                                                    Some of them charge a premium fee to increase internet speeds.
                                                </AccordionContent>
                                            </AccordionItem>
                                        </Accordion>
                                        <Accordion type={"single"} collapsible className={"w-full"}>
                                            <AccordionItem value={"1"}>
                                                <AccordionTrigger>How does Net Neutrality harm them?</AccordionTrigger>
                                                <AccordionContent>
                                                    According to <a
                                                    href={"https://en.wikipedia.org/wiki/Net_neutrality"}
                                                    className={"text-blue-400"}>Wikipedia</a>,
                                                    Under net neutrality rules, ISPs are prohibited from charging
                                                    content providers for faster access to their networks, limiting
                                                    their ability to create tiered pricing models.
                                                </AccordionContent>
                                            </AccordionItem>
                                        </Accordion>
                                    </CardContent>
                                </Card>
                                <Card className={"flex-grow"}>
                                    <CardHeader>
                                        <CardTitle>Internet Content Providers</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <Accordion type={"single"} collapsible className={"w-full"}>
                                            <AccordionItem value={"1"}>
                                                <AccordionTrigger>What are their interests?</AccordionTrigger>
                                                <AccordionContent>
                                                    According to <a
                                                    href={"https://crsreports.congress.gov/product/pdf/IF/IF12513"}
                                                    className={"text-blue-400"}>congress.gov</a>,
                                                    Companies like Netflix, YouTube, and Facebook rely on the internet
                                                    to deliver their content to users without interference. Their
                                                    primary interest is ensuring that users can access their content
                                                    without additional costs or throttled speeds.
                                                </AccordionContent>
                                            </AccordionItem>
                                        </Accordion>
                                        <Accordion type={"single"} collapsible className={"w-full"}>
                                            <AccordionItem value={"1"}>
                                                <AccordionTrigger>How does Net Neutrality harm them?</AccordionTrigger>
                                                <AccordionContent>
                                                    According to <a
                                                    href={"https://crsreports.congress.gov/product/pdf/IF/IF12513"}
                                                    className={"text-blue-400"}>congress.gov</a>,
                                                    Content providers generally favor net neutrality as it ensures
                                                    companies cannot treat them differently than the rest of the
                                                    competition.
                                                </AccordionContent>
                                            </AccordionItem>
                                        </Accordion>
                                    </CardContent>
                                </Card>
                                <Card className={"flex-grow"}>
                                    <CardHeader>
                                        <CardTitle>Internet Consumers</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <Accordion type={"single"} collapsible className={"w-full"}>
                                            <AccordionItem value={"1"}>
                                                <AccordionTrigger>What are their interests?</AccordionTrigger>
                                                <AccordionContent>
                                                    Consumers want open access to all content on the internet without
                                                    restrictions, throttling, or additional fees. They are concerned
                                                    with affordable internet access and the freedom to browser with out
                                                    interruptions.
                                                </AccordionContent>
                                            </AccordionItem>
                                        </Accordion>
                                        <Accordion type={"single"} collapsible className={"w-full"}>
                                            <AccordionItem value={"1"}>
                                                <AccordionTrigger>How does Net Neutrality harm them?</AccordionTrigger>
                                                <AccordionContent>
                                                    From a consumer perspective, net neutrality is largely a benefit, as
                                                    it ensures equal access. Although, without the ability for ISPs to
                                                    charge more money for bandwidth-heavy services, they may pass on
                                                    higher infrastructure costs. Thus in turn hurting the consumer
                                                    experience.
                                                </AccordionContent>
                                            </AccordionItem>
                                        </Accordion>
                                    </CardContent>
                                </Card>
                            </div>
                            <h3 className={"text-3xl tracking-tight mb-5 font-semibold mt-5"}>
                                Technical Background
                            </h3>
                            <Card className={"w-full"}>
                                <CardHeader>
                                    <CardTitle>Throttling</CardTitle>
                                    <CardDescription>throttling - An action by an internet service provider to limit
                                        bandwidth (download speed) to a computer or network.</CardDescription>
                                </CardHeader>
                                <CardHeader>
                                    <CardTitle>The Internet</CardTitle>
                                    <CardDescription>the internet - A network of computers sharing files and information
                                        on a global basis.</CardDescription>
                                </CardHeader>
                            </Card>
                            <h3 className={"text-3xl tracking-tight mb-5 mt-5 font-semibold"}>My Stance</h3>
                            <p>My stance on Net Neutrality is overall positive, net neutrality ensures an
                                equal and open internet. Where everyone can share information without the fear of added
                                costs for their interests and ideas. For the world to achieve net neutrality, there
                                needs to be a governing body or committe that will oversee ISPs and their actions on net
                                neutrality. This is the only way I can think of to counter corporate-greed on the
                                internet.</p>
                            <h3 className={"text-3xl tracking-tight mb-5 mt-5 font-semibold"}>
                                Pros and Cons
                            </h3>
                            <div className={"w-full flex"}>
                                <Tabs defaultValue={"pros"} className={"w-full"}>
                                    <TabsList>
                                        <TabsTrigger value={"pros"}>Pros</TabsTrigger>
                                        <TabsTrigger value={"cons"}>Cons</TabsTrigger>
                                    </TabsList>
                                    <TabsContent value={"pros"}>
                                        <Card className={"w-full"}>
                                            <CardHeader>
                                                <CardTitle>Pros</CardTitle>
                                            </CardHeader>
                                            <CardContent>
                                                <ul>
                                                    <li>- Provides equal opportunities for all internet businesses.</li>
                                                    <li>- Equal access despite geopolitical standings.</li>
                                                    <li>- Affordability of high-bandwidth internet.</li>
                                                </ul>
                                            </CardContent>
                                        </Card>
                                    </TabsContent>
                                    <TabsContent value={"cons"}>
                                        <Card className={"w-full"}>
                                            <CardHeader>
                                                <CardTitle>Cons</CardTitle>
                                            </CardHeader>
                                            <CardContent>
                                                <ul>
                                                    <li>- Fewer funds for network research and improvements.</li>
                                                    <li>- Unfair pricing.</li>
                                                    <li>- Added costs for ISPs.</li>
                                                </ul>
                                            </CardContent>
                                        </Card>
                                    </TabsContent>
                                </Tabs>
                            </div>
                        </ScrollArea>
                    </ResizablePanel>
                </ResizablePanelGroup>
            </div>
        </ThemeProvider>
    )
}