import React from "react";
import { NextContext } from "next";
import IncomeForm from "../components/IncomeForm";

interface Props {}

export default class Home extends React.Component<Props, any> {
  static async getInitialProps({  }: NextContext) {
    return {};
  }

  render() {
    return (
      <div>
        <IncomeForm />
      </div>
    );
  }
}
