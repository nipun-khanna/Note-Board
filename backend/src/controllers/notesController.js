import Note from "../models/Note.js"

export async function getAllNotes(_, res) {
    try {
        const notes = await Note.find().sort({ createdAt:-1 });
        res.status(200).json(notes);
    } catch (error) {
        console.error("Error in getAllNotes Controller: ", error);

        res.status(500).json({ message: "Internal server error"});
    }
}

export async function getNoteById(req, res) {
    try {
        const note = await Note.findById(req.params.id);
        if (!note) return res.status(404).json({ message: "Note not found!" });
        res.status(200).json(note);
    } catch (error) {
        console.error("Error in getNoteById Controller: ", error);

        res.status(500).json({ message: "Internal server error" });
    }
}

export async function createNote(req, res) {
    try {
        const {title, content} = req.body;
        const newNote = new Note({title, content});

        const savedNote = await newNote.save();
        res.status(201).json(savedNote);
    } catch (error) {
        console.error("Error in createNote Controller: ", error);

        res.status(500).json({ message: "Internal server error" });
    }
}

export async function updateNote(req, res) {
    try {
        const {title, content} = req.body;
        const note = await Note.findByIdAndUpdate(req.params.id, {title, content}, { new: true });

        if (!note) return res.status(404).json({ message: "Note not found!" })

        res.status(200).json(note);
    } catch (error) {
        console.error("Error in updateNote Controller: ", error);

        res.status(500).json({ message: "Internal server error"});
    }
}

export async function deleteNote(req, res) {
    try {
        const note = await Note.findByIdAndDelete(req.params.id);

        if (!note) return res.status(404).json({ message: "Note not found!" })

        res.status(200).json({ message: "Successfully deleted note!" });
    } catch (error) {
        console.error("Error in deleteNote Controller: ", error);

        res.status(500).json({ message: "Internal server error"});
    }
}