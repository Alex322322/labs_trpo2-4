import React from 'react';
import { unmountComponentAtNode } from "react-dom";
import Countries from './Countries';
import {render} from '@testing-library/react';
import renderer from 'react-test-renderer';

let container = null;
beforeEach(() => {
  // подготавливаем DOM-элемент, куда будем рендерить
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // подчищаем после завершения
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders with default value", () => {
  const { getByText } = render(<Countries/>);
  expect(getByText("Russian Federation")).toBeInTheDocument();
});

it("matches the snapshot", () => {
  const countries = renderer
      .create(<Countries />)
      .toJSON();
  expect(countries).toMatchSnapshot();
});

it("renders with default img", () => {
  const { getByTestId } = render(<Countries/>);
  expect(getByTestId("flag-img").getAttribute("src")
  ).toEqual("https://www.countryflags.io/RU/shiny/64.png");
});