import Layout from "../components/layout";
import Link from "next/link";
import Container from "../components/container";
import { NextSeo } from "next-seo";
import { SITE_TITLE } from "../lib/constants";
import ExtLink from "../components/extlink";

export default function contact() {
    return (
        <Layout home layoutFormat="fullwidth">
            <NextSeo
                title={"Uses - " + SITE_TITLE}
                description="Full-stack web development technologies of Ertan Kayalar"
                canonical={process.env.url + "uses"}
                openGraph={{
                    type: "website",
                    url: process.env.url + "uses",
                    title: "Uses",
                    description: "Technologies as a Fullstack Web Developer ",
                    images: [
                        {
                            url: process.env.url + "assets/og-800x600.png",
                            width: 800,
                            height: 600,
                            alt: "Uses",
                        },
                    ],
                }}
            />
            <Container>
                <article className="px-2 text-base">
                    <h1 className="text-3xl py-5 text-strong">Uses</h1>
                    <div className="text-lg text-gray-600">
                        <p className="text-lg font-normal">
                            Sometimes people asking me about the specifics of
                            some piece of software or hardware I use. I
                            summarized my uses lists here.
                        </p>

                        <div className="w-full py-4">
                            <h2 className="text-2xl font-bold  mb-2 mt-8">
                                <span className="bg-gray-100 inline-block  rounded-full h-12 w-12">
                                    <svg
                                        class="w-6 h-6 inline-block m-3"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                                        ></path>
                                    </svg>
                                </span>{" "}
                                Editor
                            </h2>

                            <ul className=" pl-4 list-disc ml-5">
                                <li>
                                    Code Editor{" ~ "}
                                    <ExtLink href="https://neovim.io">
                                        Neovim
                                    </ExtLink>
                                </li>

                                <li>
                                    Code Editor Theme{" ~ "}
                                    <ExtLink href="https://github.com/sainnhe/everforest">
                                        Everforest Light
                                    </ExtLink>
                                </li>
                                <li>
                                    Code Editor Font{" ~ "}
                                    <ExtLink href="https://github.com/JetBrains/JetBrainsMono">
                                        JetBrains Mono
                                    </ExtLink>
                                </li>
                                <li>
                                    Secondary Code Editor {" ~ "}
                                    <ExtLink href="https://www.sublimetext.com/blog/articles/sublime-text-3-point-0">
                                        Sublime Text 3
                                    </ExtLink>
                                </li>
                                <li>
                                    Markdown Editor {" ~ "}
                                    <ExtLink href="https://typora.io/">
                                        Typora
                                    </ExtLink>
                                </li>
                                <li>
                                    Console{" ~ "}
                                    <ExtLink href="https://alacritty.org">
                                        Alacritty
                                    </ExtLink>
                                </li>
                                <li>
                                    Terminal Multiplexer{" ~ "}
                                    <ExtLink href="https://github.com/tmux/tmux/wiki">
                                        Tmux
                                    </ExtLink>
                                </li>
                                <li>
                                    Shell {" ~ "}
                                    <ExtLink href="https://www.zsh.org">
                                        Zsh
                                    </ExtLink>
                                </li>
                            </ul>

                            <h2 className="text-2xl font-bold text-light-primary mb-2 mt-8">
                                <span className="bg-gray-100 inline-block  rounded-full h-12 w-12">
                                    <svg
                                        class="w-6 h-6 inline-block m-3"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                        ></path>
                                    </svg>
                                </span>{" "}
                                Desktop
                            </h2>
                            <ul className="text-light-secondary pl-4 list-disc ml-5">
                                <li>
                                    Operating System{" ~ "}
                                    <ExtLink href="https://arcolinux.info/">
                                        Arco Linux (Arch Based)
                                    </ExtLink>
                                </li>
                                <li>
                                    Primary Browser{" ~ "}
                                    <ExtLink href="https://vivaldi.com/">
                                        Vivaldi
                                    </ExtLink>
                                </li>
                                <li>
                                    Secondary Browser {" ~ "}
                                    <ExtLink href="https://www.mozilla.org/firefox/">
                                        Firefox
                                    </ExtLink>
                                </li>
                                <li>
                                    Email {" ~ "}
                                    <ExtLink href="https://getmailspring.com/">
                                        Mailspring
                                    </ExtLink>
                                </li>
                                <li>
                                    Task & Project Management{" ~ "}
                                    <ExtLink href="http://notion.so">
                                        Notion
                                    </ExtLink>
                                </li>
                            </ul>

                            <h2 className="text-2xl font-bold text-light-primary mb-2 mt-8">
                                <span className="bg-gray-100 inline-block  rounded-full h-12 w-12">
                                    <svg
                                        class="w-6 h-6 inline-block m-3"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                                        ></path>
                                    </svg>
                                </span>{" "}
                                Mobile
                            </h2>
                            <ul className="text-light-secondary pl-4 list-disc ml-5">
                                <li>
                                    Markdown Editor{" ~ "}
                                    <ExtLink href="https://evernote.com">
                                        Evernote
                                    </ExtLink>
                                </li>
                                <li>
                                    Task & Project Managment{" ~ "}
                                    <ExtLink href="https://trello.com">
                                        Notion App
                                    </ExtLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </article>
            </Container>
        </Layout>
    );
}
