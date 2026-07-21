const asyncHandler = require("express-async-handler");
const { getAllStudents, addNewStudent, getStudentDetail, setStudentStatus, updateStudent } = require("./students-service");

const handleGetAllStudents = asyncHandler(async (req, res) => {
    //write your code
    const { userId } = req.query;
    const students = await getAllStudents({userId}); // possibly only use userId???
    res.json({ students });

});

const handleAddStudent = asyncHandler(async (req, res) => {
    //write your code
    const payload = req.body;
    const message = await addNewStudent(payload);
    res.json(message);

});

const handleUpdateStudent = asyncHandler(async (req, res) => {
    //write your code
    const payload = req.body;
    const { id: userId } = req.params;
    const message = await updateStudent({...payload, userId});
    res.json(message);

});

const handleGetStudentDetail = asyncHandler(async (req, res) => {
    //write your code
    const { id: userId } = req.params;
    const studentDetail = await getStudentDetail(userId);
    res.json(studentDetail);

});

const handleStudentStatus = asyncHandler(async (req, res) => {
    //write your code
    const { id: userId } = req.params
    const { status } = req.body;
    // call the correct service function and pass reviewer id when available
    const message = await setStudentStatus({ userId, status, reviewerId: req.user?.id });
    res.json(message);
});

module.exports = {
    handleGetAllStudents,
    handleGetStudentDetail,
    handleAddStudent,
    handleStudentStatus,
    handleUpdateStudent,
};
