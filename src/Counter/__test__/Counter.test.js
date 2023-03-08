import React from "react"
import Counter from "../Counter"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"

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

test('substract button renders with -', () => {
    render(<Counter />)
    const substractBtn = screen.getByTestId("substract-btn")

    expect(substractBtn.textContent).toBe("-")
});
