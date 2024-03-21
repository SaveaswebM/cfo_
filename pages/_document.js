import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head >
      <>
  <meta charSet="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>The Legato</title>
  {/* favicon */}
  <link rel="shortcut icon" type="image/png" href="assests/images/logo.png" />
  {/* Bootstrap CSS  */}
  <link rel="stylesheet" type="text/css" href="assests/css/bootstrap.min.css" />
  {/* Owl Carousel CSS  */}
  <link
    rel="stylesheet"
    type="text/css"
    href="assests/css/owl.carousel.min.css"
  />
  {/* font CSS */}
  <link rel="stylesheet" type="text/css" href="assests/css/fonts.css" />
  {/* Font Awesome CSS */}
  <link rel="stylesheet" href="assests/css/all.css" />
  <link rel="stylesheet" href="assests/css/all.min.css" />
  {/* magnific popup*/}
  <link rel="stylesheet" href="assests/css/magnific-popup.css" />
  {/* Animate Css*/}
  <link rel="stylesheet" href="assests/css/animate.css" />
  {/* Our Custom CSS */}
  <link rel="stylesheet" href="assests/css/style.css" />
  <link rel="stylesheet" href="assests/css/responsive.css" />
  {/* Scrollbar Custom CSS */}
  <link rel="stylesheet" href="assests/css/jquery.mCustomScrollbar.min.css" />
</>
</Head>
      <body>
        <Main />
        <NextScript />
       

    
      </body>
    </Html>
  );
}
