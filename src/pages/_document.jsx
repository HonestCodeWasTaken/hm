import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  // Add more routes here if you want to use the same classes
  allowedRoutes = ['/dashboard']

  shouldPageScroll() {
    // eslint-disable-next-line no-underscore-dangle
    const { page } = this.props.__NEXT_DATA__
    if (this.allowedRoutes.includes(page)) return true
    return false
  }

  render() {
    return (
      <Html>
        <Head />
        <body
          style={
            this.shouldPageScroll()
              ? { overflow: 'hidden' }
              : { overflow: 'auto' }
          }
        >
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
