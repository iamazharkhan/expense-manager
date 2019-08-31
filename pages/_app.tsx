import App, { AppContext } from 'next/app'
import { ApolloProvider } from 'react-apollo'
import ApolloClient from 'apollo-client'
import Page from '../components/Page'
import withData from '../lib/withData'

interface PageProps {
  [index: string]: any;
}

class MyApp extends App<{ apollo: ApolloClient<{}> }> {
  static async getInitialProps({ Component, ctx }: AppContext) {
    let pageProps: PageProps = {}

    // makes sure all the queries and mutations on the page are fired up
    // before component is rendered
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    // this exposes the query to the user
    pageProps.query = ctx.query

    return { pageProps }
  }
  render() {
    const { Component, apollo, pageProps } = this.props

    return (
      <ApolloProvider client={apollo}>
        <Page>
          <Component {...pageProps} />
        </Page>
      </ApolloProvider>
    )
  }
}

export default withData(MyApp)