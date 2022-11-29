/* eslint-disable no-extra-parens */
import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function BDropDown({ options }: { options: string[] }): JSX.Element {
    type ChangeEvent = React.ChangeEvent<
        HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
    >;
    const [choice, setChoice] = useState<string>(options[0]);
    function updateChoice(event: ChangeEvent) {
        setChoice(event.target.value);
        changeBackground(choice);
    }
    function changeBackground(option: string) {
        const box = document.getElementById("box");
        if (option.includes("Forest")) {
            if (box != null) {
                box.style.backgroundImage =
                    "url(https://images.unsplash.com/photo-1558022103-603c34ab10ce?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80)";
            }
        } else if (option === "Volcano") {
            if (box != null) {
                box.style.backgroundColor = "red";
            }
        } else if (option === "Waterfall") {
            if (box != null) {
                box.style.backgroundColor = "cyan";
            }
        }
    }

    return (
        <span style={{ display: "inline-flex", margin: "auto" }}>
            <Form.Check inline>
                <Form.Group controlId="formSelectOptions">
                    <Form.Label>choose a Background</Form.Label>
                    <Form.Select value={choice} onChange={updateChoice}>
                        {options.map((currentOption: string) => (
                            <option key={currentOption} value={currentOption}>
                                {currentOption}
                            </option>
                        ))}
                    </Form.Select>
                </Form.Group>
            </Form.Check>
        </span>
    );
}
