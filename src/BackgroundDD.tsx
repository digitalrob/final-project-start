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
        changeBackground(event.target.value);
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
                box.style.backgroundImage =
                    "url(https://images.unsplash.com/photo-1619266465172-02a857c3556d?ixlib=rb-4.0.3&w=1080&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb)";
            }
        } else if (option === "Waterfall") {
            if (box != null) {
                box.style.backgroundImage =
                    "url(https://cf-images.us-east-1.prod.boltdns.net/v1/static/3281700261001/6a204d6b-0fe4-45c8-a63e-b2e09c11de32/a13648d5-c0b9-4ded-8ecd-89aad8634e6c/1280x720/match/image.jpg)";
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
