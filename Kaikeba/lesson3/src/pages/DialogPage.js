import React, { useState } from "react";
import Dialog from "../components/Dialog";
import { Button } from "antd";

export default function DialogPage() {
    const [showDialog, setShowDialog] = useState(false);
    return (
        <div className="dialogPage">
            <h1>DialogPage</h1>
            <Button onClick={() => setShowDialog(!showDialog)}>toggle</Button>
            {showDialog && <Dialog />}
        </div>
    );
}
