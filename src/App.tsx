import React, { Component, ReactNode } from 'react'

declare global {
  interface Window {
    google:any;
  }
}

let google = window.google;

class App extends Component{
  
  componentDidMount () {
    window.googleTranslateElementInit = this.googleTranslateElementInit;
  }

  googleTranslateElementInit() {
    new window.google.translate.TranslateElement({pageLanguage: 'en',layout: window.google.translate.TranslateElement.FloatPosition.TOP_LEFT}, 'google_translate_element');
  }

  render() {
    return (
      <>
      <script type='text/javascript' src='//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit' />
      <div id="google_translate_element"></div>
      <p>
        Officially, the first programming language for a computer was Plankalkül,developed by Konrad Zuse 
         for the Z3 between 1943 and 1945. However, it was not implemented until 1998.Short Code, which
          was proposed by John Mauchly in 1949, is considered to be the first high-level programming language. 
         It was designed to represent mathematical expressions in a format readable by human beings. However, 
        because it had to be translated into machine code before it could be executed, it had relatively slow processing speeds.
        Other early programming languages were developed in the 1950s and 1960s, including Autocode, COBOL, FLOW-MATIC, and LISP. Of these, only COBOL and LISP are still in use today.</p>
      </>
    )
  }
}

export default App
