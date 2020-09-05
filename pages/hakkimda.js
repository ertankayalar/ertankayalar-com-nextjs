import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import PageTitle from '../components/page-title'
export default function about() {
  return (
    <Layout className="w-full">
      <Head>
        <title>Hakkımda - {siteTitle}</title>
      </Head>

      <article className="prose-lg">
            <h1>Ertan Kayalar</h1>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto explicabo vel facilis quisquam laboriosam suscipit amet. Voluptates distinctio laborum id doloremque ad velit inventore eveniet suscipit magnam dolorem. Sequi, libero!
            </p>

            


      </article>

    </Layout>
  );
}
