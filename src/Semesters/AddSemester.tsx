import React, { useState } from "react";
import { Button, Form, Modal, Row } from "react-bootstrap";
import { Semester } from "../interfaces/Semester";

export function AddSemester({
    show,
    handleClose,
    addSemester
}: {
    show: boolean;
    handleClose: () => void;
    addSemester: (newSemester: Semester) => void;
}) {
    const seasons = ["Fall", "Winter", "Spring", "Summer"];
    const [season, setSeason] = useState<string>(seasons[0]);
    function updateSeason(event: React.ChangeEvent<HTMLSelectElement>) {
        setSeason(event.target.value);
    }
    const [year, setYear] = useState<string>("");

    function saveChanges() {
        addSemester({
            name: season + " " + year,
            season: season,
            year: year,
            credits: 0,
            courses: []
        });
        handleClose();
    }
    return (
        <div>
            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Add New Semester</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group controlId="AddSemester" as={Row}>
                        <Form.Label>Semester Season:</Form.Label>
                        <Form.Select
                            data-testid="semSeasonDropdown"
                            value={season}
                            onChange={updateSeason}
                        >
                            {seasons.map((concentration: string) => (
                                <option
                                    key={concentration}
                                    value={concentration}
                                >
                                    {concentration}
                                </option>
                            ))}
                        </Form.Select>
                        <Form.Label>Semester Year:</Form.Label>
                        <Form.Control
                            value={year}
                            onChange={(
                                event: React.ChangeEvent<HTMLInputElement>
                            ) => setYear(event.target.value)}
                        />
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        variant="seconary"
                        onClick={handleClose}
                        data-testid="cancel-button"
                    >
                        Close
                    </Button>
                    <Button
                        variant="primary"
                        onClick={saveChanges}
                        data-testid="save-button"
                    >
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
