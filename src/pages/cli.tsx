import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import Layout from "@theme/Layout";
import Icon from "@mittwald/flow-react-components/Icon";
import { IconBrandGithub, IconRocket, IconNotebook } from "@tabler/icons-react";

import styles from "./cli.module.css";
import demo from "@site/static/img/cli-demo.png";
import Translate, { translate } from "@docusaurus/Translate";
import APIFeature from "@site/src/components/HomepageFeatures/APIFeature";
import PlatformFeature from "@site/src/components/HomepageFeatures/PlatformFeature";

function CLIPageHeader() {
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">
          <code>mw</code> – <Translate id={"cli.title"}>the mittwald command-line tool</Translate>
        </h1>
        <img src={demo} />
        <div className={styles.buttons}>
          <Link
            className="button button--success button--lg"
            to="/docs/v2/cli/usage/intro"
          >
            <Icon>
              <IconRocket />
            </Icon>
            <Translate id={"cli.cta"}>Get started with our CLI</Translate>
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="/docs/v2/category/cli"
          >
            <Icon>
              <IconNotebook />
            </Icon>
            <Translate id={"cli.full-docs"}>Full documentation</Translate>
          </Link>
          <Link
            className="button button--secondary button--lg"
            href="https://github.com/mittwald/cli"
          >
            <Icon>
              <IconBrandGithub />
            </Icon>
            Github
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <Layout
      title="mittwald CLI"
      description={translate({
        id: "cli.description",
        message:
          "The mittwald Developer Portal provides developers with the resources they need to integrate mittwald products into their own applications using our API."
      })}
    >
      <div className={styles.wrapper}>
        <CLIPageHeader />
        <main className={"index"}>
          <PlatformFeature />
          <APIFeature />
        </main>
      </div>
    </Layout>
  );
}
