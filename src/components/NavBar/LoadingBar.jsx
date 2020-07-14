import React from 'react';
import { Button, Spinner } from "react-bootstrap"

export default function LoadBar() {
    return (
        <div>
            <Button variant="success" disabled>
            <Spinner
            as="span"
            animation="grow"
            size="sm"
            role="status"
            aria-hidden="true"
            />
            Loading...
            </Button>
        </div>
    );
   
};
