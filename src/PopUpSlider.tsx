/* eslint-disable no-extra-parens */
import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { BDropDown } from "./BackgroundDD";

export function PopUpSlider(): JSX.Element {
    // type ChangeEvent = React.ChangeEvent<
    //     HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
    // >;
    const [Pop, setPop] = useState<boolean>(false);
    return (
        <div>
            <div>
                <Form.Check
                    inline
                    type="switch"
                    id="hider-check"
                    label="Show Selections"
                    checked={Pop}
                    onChange={() => setPop(!Pop)}
                />
                {Pop && (
                    <>
                        <div className="background">
                            <BDropDown
                                options={["", "Forest", "Volcano", "Waterfall"]}
                            />
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}
