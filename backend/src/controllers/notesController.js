export function getAllNotes(req, res) {
    res.status(200).json({message: "Got All Notes"})
}

export function createNote(req, res) {
    res.status(201).json({message: "Created Note"})
}

export function updateNote(req, res) {
    res.status(200).json({message: "Updated Note"})
}

export function deleteNote(req, res) {
    res.status(200).json({message: "Delete Note"})
}