import React from "react"
import Counter from "../Counter"
import { render, screen, fireEvent, cleanup } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"

afterAll(() => {
    cleanup()
})

test('header renders with correct text', () => {
    render(<Counter />)
    const headerEl = screen.getByTestId("header")

    expect(headerEl.textContent).toBe("My Counter")
});

test("counter initally start with text of 0", () => {
    render(<Counter />)
    const counterEl = screen.getByTestId("counter")

    expect(counterEl.textContent).toBe("0")
})

test('input contains inital value of 1', () => {
    render(<Counter />)
    const inputEl = screen.getByTestId("input")

    expect(inputEl.value).toBe("1")
});

test('add button renders with +', () => {
    render(<Counter />)
    const addBtn = screen.getByTestId("add-btn")

    expect(addBtn.textContent).toBe("+")
});

test('subtract button renders with -', () => {
    render(<Counter />)
    const subtractBtn = screen.getByTestId("subtract-btn")

    expect(subtractBtn.textContent).toBe("-")
});

test('change value of input works correctly', () => {
    render(<Counter />)
    const inputEl = screen.getByTestId("input")

    expect(inputEl.value).toBe("1")

    fireEvent.change(inputEl, {
        target: {
            value: "5"
        }
    })

    expect(inputEl.value).toBe("5")
});

test('click on plus btn adds 1 to counter', () => {
    render(<Counter />)
    const addBtnEl = screen.getByTestId('add-btn')
    const counterEl = screen.getByTestId('counter')

    expect(counterEl.textContent).toBe("0")

    fireEvent.click(addBtnEl)

    expect(counterEl.textContent).toBe("1")
});

test('click on subtract btn subtracts 1 from counter', () => {
    render(<Counter />)
    const subtractBtnEl = screen.getByTestId('subtract-btn')
    const counterEl = screen.getByTestId('counter')

    expect(counterEl.textContent).toBe("0")

    fireEvent.click(subtractBtnEl)

    expect(counterEl.textContent).toBe("-1")
});

test('changing input value then clicking on add btn works correctly', () => {
    render(<Counter />)
    const addBtnEl = screen.getByTestId('add-btn')
    const counterEl = screen.getByTestId('counter')
    const inputEl = screen.getByTestId('input')

    fireEvent.change(inputEl, {
        target:{
            value: "5"
        }
    })

    fireEvent.click(addBtnEl)
    expect(counterEl.textContent).toBe("5")
});

test('changing input value then clicking on subtract btn works correctly', () => {
    render(<Counter />)
    const subtractBtnEl = screen.getByTestId('subtract-btn')
    const counterEl = screen.getByTestId('counter')
    const inputEl = screen.getByTestId('input')

    fireEvent.change(inputEl, {
        target:{
            value: "5"
        }
    })

    fireEvent.click(subtractBtnEl)
    expect(counterEl.textContent).toBe("-5")
});

test('adding  and then subtracting leads to the correct counter number', () => {
    render(<Counter />)
    const subtractBtnEl = screen.getByTestId('subtract-btn')
    const addBtnEl = screen.getByTestId('add-btn')
    const counterEl = screen.getByTestId('counter')
    const inputEl = screen.getByTestId('input')

    fireEvent.change(inputEl, {
        target: {
            value: "10"
        }
    })

    fireEvent.click(addBtnEl)
    fireEvent.click(addBtnEl)
    fireEvent.click(addBtnEl)
    fireEvent.click(addBtnEl)
    fireEvent.click(subtractBtnEl)
    fireEvent.click(subtractBtnEl)

    expect(counterEl.textContent).toBe("20")

    fireEvent.change(inputEl, {
        target: {
            value: "5"
        }
    })

    fireEvent.click(addBtnEl)
    fireEvent.click(subtractBtnEl)
    fireEvent.click(subtractBtnEl)

    expect(counterEl.textContent).toBe("15")
});

test('counter contains correct className', () => {
    render(<Counter />)
    const counterEl = screen.getByTestId('counter')
    const inputEl = screen.getByTestId('input')
    const subtractBtnEl = screen.getByTestId('subtract-btn')
    const addBtnEl = screen.getByTestId('add-btn')

    expect(counterEl.className).toBe("")

    fireEvent.change(inputEl, {
        target: {
            value: "50"
        }
    })

    fireEvent.click(addBtnEl)
    expect(counterEl.className).toBe("")

    fireEvent.click(addBtnEl)
    expect(counterEl.className).toBe('green')
    
    fireEvent.click(addBtnEl)
    expect(counterEl.className).toBe('green')

    fireEvent.click(subtractBtnEl)
    fireEvent.click(subtractBtnEl)
    expect(counterEl.className).toBe('')

    fireEvent.click(subtractBtnEl)
    fireEvent.click(subtractBtnEl)
    fireEvent.click(subtractBtnEl)
    fireEvent.click(subtractBtnEl)
    expect(counterEl.className).toBe('red')
});