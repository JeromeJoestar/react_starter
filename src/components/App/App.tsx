import * as React from "react";
import { HelmetProvider, Helmet } from "react-helmet-async";

import { Footer } from "@src/components/Footer";
import { Routes } from "@src/components/Routes";

import "@src/styles/index.scss";

interface AppProps {
  serverError: number;
}

interface AppState {
  error: boolean;
}

export class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = { error: false };
  }

  componentDidCatch(error: any, errorInfo: any) {
    this.setState({ error: true });
    console.log(error);
    console.log(errorInfo);
  }

  render() {
    const { serverError } = this.props;
    const { error } = this.state;

    if (error || serverError) {
      return (
        <div>
          <h1>An Error Occurred</h1>
          <p>Some wires got crossed in a bad way!</p>
        </div>
      );
    }

    return (
      <HelmetProvider>
        <Helmet />
        <Routes />
        <Footer />
      </HelmetProvider>
    );
  }
}
