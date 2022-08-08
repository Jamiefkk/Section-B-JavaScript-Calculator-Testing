import React from 'react';
import Calculator from '../containers/Calculator';
import {render, fireEvent} from '@testing-library/react';

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = render(<Calculator/>)
  })

  it('should change running total on number enter', () => {
    const button4 = container.getByTestId('number4');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button4);
    expect(runningTotal.textContent).toEqual('4');
  })

  it('should return 4+1=5', () => {
    const button4 = container.getByTestId('number4');
    const buttonAdd = container.getByTestId('operator-add');
    const button1 = container.getByTestId('number1');
    const buttonEquals = container.getByTestId('operator-equals');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button4);
    fireEvent.click(buttonAdd);
    fireEvent.click(button1);
    fireEvent.click(buttonEquals);
    expect(runningTotal.textContent).toEqual('5');
  })

  it('should return 7-4=3', () => {
    const button7 = container.getByTestId('number7');
    const buttonSubtract = container.getByTestId('operator-subtract');
    const button4 = container.getByTestId('number4');
    const buttonEquals = container.getByTestId('operator-equals');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button7);
    fireEvent.click(buttonSubtract);
    fireEvent.click(button4);
    fireEvent.click(buttonEquals);
    expect(runningTotal.textContent).toEqual('3');
  })

  it('should return 3x5=15', () => {
    const button3 = container.getByTestId('number3');
    const buttonMultiply = container.getByTestId('operator-multiply');
    const button5 = container.getByTestId('number5');
    const buttonEquals = container.getByTestId('operator-equals');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button3);
    fireEvent.click(buttonMultiply);
    fireEvent.click(button5);
    fireEvent.click(buttonEquals);
    expect(runningTotal.textContent).toEqual('15');
  })

  it('should return 21/3=7', () => {
    const button2 = container.getByTestId('number2');
    const button1 = container.getByTestId('number1');
    const buttonDivide = container.getByTestId('operator-divide');
    const button3 = container.getByTestId('number3');
    const buttonEquals = container.getByTestId('operator-equals');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button2);
    fireEvent.click(button1);
    fireEvent.click(buttonDivide);
    fireEvent.click(button3);
    fireEvent.click(buttonEquals);
    expect(runningTotal.textContent).toEqual('7');
  })

  it('should return 222', () => {
    const button2 = container.getByTestId('number2');
    fireEvent.click(button2);
    fireEvent.click(button2);
    fireEvent.click(button2);
    const runningTotal = container.getByTestId('running-total');
    expect(runningTotal.textContent).toEqual('222');
  })

  it('should return 3x3+3=12', () => {
    const button3 = container.getByTestId('number3');
    const buttonMultiply = container.getByTestId('operator-multiply');
    const buttonPlus = container.getByTestId('operator-add');
    const buttonEquals = container.getByTestId('operator-equals');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button3);
    fireEvent.click(buttonMultiply);
    fireEvent.click(button3);
    fireEvent.click(buttonPlus);
    fireEvent.click(button3);
    fireEvent.click(buttonEquals);
    expect(runningTotal.textContent).toEqual('12');
  })

  it('should return 3x5=(clear)+3=9', () => {
    const button3 = container.getByTestId('number3');
    const buttonMultiply = container.getByTestId('operator-multiply');
    const button5 = container.getByTestId('number5');
    const buttonEquals = container.getByTestId('operator-equals');
    const buttonClear = container.getByTestId('clear');
    const runningTotal = container.getByTestId('running-total');
    const buttonAdd = container.getByTestId('operator-add');
    fireEvent.click(button3);
    fireEvent.click(buttonMultiply);
    fireEvent.click(button5);
    fireEvent.click(buttonEquals);
    fireEvent.click(buttonClear);
    fireEvent.click(buttonAdd);
    fireEvent.click(button3);
    fireEvent.click(buttonEquals);
    expect(runningTotal.textContent).toEqual('18');
  })
})

