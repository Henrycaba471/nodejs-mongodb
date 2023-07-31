import Task from "../models/Task";


export const home = async (req, res) => {
    const tasks = await Task.find().lean();
    res.render('index', { tasks: tasks });
};

export const addTask = async (req, res) => {

    const data = req.body;

    if (!data.title || !data.description) {
        res.status(302).redirect('/');
    }

    const newTask = new Task(data);
    newTask.done = false;

    try {
        await newTask.save();
        res.status(302).redirect('/');
    } catch (error) {
        console.log(error);
    }
};

export const editGet = async (req, res) => {

    try {
        const task = await Task.findById(req.params.id).lean();
        res.render('edit', { task: task });
    } catch (error) {
        console.log(error);
    }
}


export const editPost = async (req, res) => {

    await Task.findByIdAndUpdate(req.params.id, req.body)
    res.status(302).redirect('/');
}

export const deleteTask = async (req, res) => {
    const { id } = req.params;
    await Task.findByIdAndDelete(id);
    res.status(302).redirect('/');
}

export const done = async (req, res) => {
    const { id } = req.params;
    const task = await Task.findById(id);
    task.done = !task.done;
    task.save();
    res.status(302).redirect('/');
}

export const about = (req, res) => {
    res.render('about');
};

